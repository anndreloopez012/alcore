import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { CHATBOT_SYSTEM_PROMPT, CHATBOT_CONFIG } from '@/config/chatbot-config';
import { GEMINI_API_KEY } from '@/config/gemini-api-key';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const useGeminiChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: CHATBOT_CONFIG.welcomeMessage }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = async (userMessage: string) => {
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'TU_API_KEY_AQUI') {
      toast({
        title: "API Key no configurada",
        description: "Por favor configura la API key en src/config/gemini-api-key.ts",
        variant: "destructive",
      });
      return;
    }

    if (!userMessage.trim()) return;

    // Validación de entrada
    const sanitizedMessage = userMessage.trim().slice(0, 500);

    // Agregar mensaje del usuario
    const newUserMessage: Message = { role: 'user', content: sanitizedMessage };
    setMessages(prev => [...prev, newUserMessage]);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${CHATBOT_CONFIG.geminiModel}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${CHATBOT_SYSTEM_PROMPT}\n\nUsuario: ${sanitizedMessage}`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: CHATBOT_CONFIG.temperature,
              maxOutputTokens: CHATBOT_CONFIG.maxTokens,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Gemini API Error:', errorData);
        
        if (response.status === 429) {
          throw new Error('Has excedido el límite de peticiones. Espera un momento e intenta de nuevo.');
        } else if (response.status === 401 || response.status === 403) {
          throw new Error('API Key inválida o expirada. Por favor actualiza tu API key.');
        } else {
          throw new Error('Error al conectar con el servicio de IA');
        }
      }

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                        'Lo siento, no pude generar una respuesta. ¿Podrías reformular tu pregunta?';

      const newAssistantMessage: Message = { role: 'assistant', content: aiResponse };
      setMessages(prev => [...prev, newAssistantMessage]);

    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "No se pudo enviar el mensaje",
        variant: "destructive",
      });

      // Agregar mensaje de error en el chat
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Lo siento, hubo un problema al procesar tu mensaje. Por favor intenta de nuevo.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: CHATBOT_CONFIG.welcomeMessage }]);
  };

  return {
    messages,
    isLoading,
    sendMessage,
    clearChat,
  };
};
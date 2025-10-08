# 🤖 Configuración de API Key para el Chatbot de ALCORE

## ¿Qué es la API Key?

La API Key es una clave que permite al chatbot conectarse con Google Gemini (la inteligencia artificial que responde las preguntas).

## 📅 Fechas Importantes

- **Hasta el 13 de Octubre 2025**: Gemini es GRATUITO
- **Después del 13 de Octubre**: Necesitarás tu propia API key (también tiene un tier gratuito muy generoso)

## 🔑 Cómo Obtener tu API Key GRATUITA

### Opción 1: Google AI Studio (Recomendada - Más simple)

1. **Visita**: https://aistudio.google.com/app/apikey
2. **Inicia sesión** con tu cuenta de Google (Gmail)
3. **Click en "Create API Key"** (Crear API Key)
4. **Copia la clave** que aparece (guárdala en un lugar seguro)

### Opción 2: Google Cloud Console (Más control)

1. **Visita**: https://console.cloud.google.com/
2. **Crea un proyecto nuevo** o selecciona uno existente
3. **Habilita la API de Gemini**:
   - Ve a "APIs & Services" > "Library"
   - Busca "Generative Language API"
   - Click en "Enable"
4. **Crea una API Key**:
   - Ve a "APIs & Services" > "Credentials"
   - Click en "Create Credentials" > "API Key"
   - Copia la clave

## 📊 Límites Gratuitos de Gemini

### Tier Gratuito (Sin costo):
- **60 peticiones por minuto**
- **1,500 peticiones por día**
- **1 millón de tokens por mes**

Para un chatbot de empresa, estos límites son más que suficientes para comenzar.

### Si necesitas más:
- El costo es muy bajo: aproximadamente **$0.01 por 1,000 peticiones**
- Solo pagas lo que uses

## 🔧 Cómo Actualizar la API Key en el Chatbot

### Opción A: Desde la interfaz del chatbot

1. **Abre el chatbot** en tu sitio web
2. **Click en el icono de configuración** (⚙️) en la parte superior del chat
3. **Pega tu API Key** en el campo que aparece
4. **Click en "Guardar"**

¡Listo! La clave se guardará en tu navegador y el chatbot funcionará.

### Opción B: Configuración por código (si eres desarrollador)

Si quieres pre-configurar la API key en el código:

1. Abre el archivo: `src/components/ChatBot.tsx`
2. Busca esta línea (aproximadamente línea 15):
   ```typescript
   const [apiKey, setApiKey] = useState(() => {
     return localStorage.getItem('gemini_api_key') || '';
   });
   ```
3. Cámbiala por:
   ```typescript
   const [apiKey, setApiKey] = useState(() => {
     return localStorage.getItem('gemini_api_key') || 'TU_API_KEY_AQUI';
   });
   ```
4. Reemplaza `TU_API_KEY_AQUI` con tu API key real

**⚠️ IMPORTANTE**: Si usas esta opción, tu API key estará visible en el código fuente. Es mejor que los usuarios la configuren desde la interfaz.

## 🔐 Seguridad

### ⚠️ Importante:
- **La API key está en el frontend** (navegador del usuario)
- Esto significa que técnicamente alguien podría verla si inspecciona el código
- Para uso de bajo/medio volumen está bien
- Si tu chatbot se vuelve muy popular, considera mover la lógica a un backend

### Recomendaciones:
1. **Activa restricciones en Google Cloud Console**:
   - Ve a tu API key en Google Cloud Console
   - Agrega "Application restrictions" para limitar el uso solo a tu dominio
   - Ejemplo: Solo permitir desde `*.tudominio.com`

2. **Monitorea el uso**:
   - Revisa periódicamente en https://console.cloud.google.com/
   - Ve a "APIs & Services" > "Dashboard"
   - Verifica que no haya uso anormal

3. **Establece cuotas**:
   - En Google Cloud Console
   - Ve a "APIs & Services" > "Quotas"
   - Establece límites diarios para evitar sorpresas

## 🚨 Solución de Problemas

### Error: "API Key inválida o expirada"
- Verifica que copiaste la clave completa
- Asegúrate de que la API de Generative Language está habilitada en Google Cloud Console
- Genera una nueva clave si es necesario

### Error: "Has excedido el límite de peticiones"
- Espera unos minutos (se resetea cada minuto)
- Si sucede frecuentemente, considera actualizar a un plan de pago (muy económico)

### El chatbot no responde
- Verifica que ingresaste la API key correctamente
- Abre la consola del navegador (F12) y verifica si hay errores
- Asegúrate de tener conexión a internet

## 📞 Contacto

Si tienes problemas configurando la API key:
- Revisa la documentación oficial: https://ai.google.dev/gemini-api/docs
- Contacta al equipo de desarrollo que configuró tu sitio

## 🔄 Alternativas a Gemini

Si prefieres usar otra IA, necesitarías modificar el código del chatbot. Otras opciones populares:

1. **OpenAI GPT** (ChatGPT)
   - Más caro pero muy bueno
   - API key en: https://platform.openai.com/api-keys

2. **Anthropic Claude**
   - Similar a GPT
   - API key en: https://console.anthropic.com/

3. **Groq** (Llama gratis y rápido)
   - Muy rápido y gratuito
   - API key en: https://console.groq.com/

Para cambiar de proveedor, necesitarías modificar el archivo `src/hooks/useGeminiChat.ts` y actualizar la URL de la API.

---

**Última actualización**: Octubre 2025
**Modelo recomendado**: gemini-2.0-flash-exp (gratuito y rápido)
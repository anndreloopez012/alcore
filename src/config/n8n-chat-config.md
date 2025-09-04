# Configuración para n8n - Chat Widget

## Variables de Entorno Requeridas

Agrega estas variables a tu archivo de configuración de n8n:

```bash
# URL del webhook de n8n para el chat
REACT_APP_N8N_WEBHOOK_URL=https://tu-n8n-instance.com/webhook/chat

# Configuración del bot (opcional)
BOT_NAME="ALCORE Assistant"
WELCOME_MESSAGE="¡Hola! Soy el asistente de ALCORE. ¿En qué puedo ayudarte hoy?"
```

## Estructura del Payload que recibe n8n

El widget de chat enviará la siguiente estructura JSON a tu webhook de n8n:

```json
{
  "message": "Mensaje del usuario",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "sessionId": "chat_1705315800000",
  "source": "chat_widget",
  "page": "https://tu-sitio.com/",
  "userAgent": "Mozilla/5.0...",
  "ip": "192.168.1.1"
}
```

## Configuración del Workflow en n8n

### 1. Webhook Trigger
- **Method**: POST
- **Path**: `/webhook/chat`
- **Authentication**: None (o según tu configuración)
- **Response Mode**: Respond with last node

### 2. Nodos Sugeridos

#### A. Procesamiento de Mensaje
```javascript
// Código para el nodo Function
const message = $json.message;
const sessionId = $json.sessionId;
const page = $json.page;

// Lógica para procesar el mensaje
let response = "";
let intent = "";

// Detectar intención del mensaje
if (message.toLowerCase().includes("cita") || message.toLowerCase().includes("agendar")) {
  intent = "schedule_appointment";
  response = "Me gustaría ayudarte a agendar una cita. ¿Qué tipo de servicio te interesa y cuál sería tu disponibilidad?";
} else if (message.toLowerCase().includes("precio") || message.toLowerCase().includes("costo")) {
  intent = "pricing_inquiry";
  response = "Te ayudo con información sobre precios. ¿Qué servicio específico te interesa? Tenemos desarrollo a medida, productos de software y servidores en la nube.";
} else if (message.toLowerCase().includes("contacto") || message.toLowerCase().includes("teléfono")) {
  intent = "contact_info";
  response = "Puedes contactarnos de las siguientes formas:\n📞 Teléfono: +1234567890\n📧 Email: info@alcore.com\n🌐 Sitio web: www.alcore.com";
} else {
  intent = "general_inquiry";
  response = "Gracias por tu consulta. Un especialista revisará tu mensaje y se pondrá en contacto contigo pronto. ¿Hay algo más específico en lo que pueda ayudarte?";
}

return {
  message: message,
  response: response,
  intent: intent,
  sessionId: sessionId,
  timestamp: new Date().toISOString(),
  page: page
};
```

#### B. Almacenamiento en Base de Datos (opcional)
- **Nodo**: Database (MySQL/PostgreSQL/MongoDB)
- **Operación**: Insert
- **Tabla**: `chat_messages`

```sql
CREATE TABLE chat_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  session_id VARCHAR(255),
  user_message TEXT,
  bot_response TEXT,
  intent VARCHAR(100),
  page_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### C. Notificación por Email/Slack
- **Nodo**: Gmail/Outlook/Slack
- **Trigger**: Cuando intent = "schedule_appointment" o mensajes importantes

#### D. Respuesta al Cliente
- **Nodo**: Respond to Webhook
- **Response**: 
```json
{
  "success": true,
  "response": "{{ $json.response }}",
  "sessionId": "{{ $json.sessionId }}"
}
```

## Configuración Avanzada

### Variables de Entorno para n8n
```bash
# Base de datos
DB_HOST=localhost
DB_PORT=5432
DB_NAME=chat_db
DB_USER=user
DB_PASS=password

# Email/Notificaciones
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-password

# Slack (opcional)
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
```

### Respuestas Automáticas Predefinidas

El sistema puede manejar estos tipos de consultas automáticamente:

1. **Agendar Citas**: Redirige a formulario de citas o calendario
2. **Información de Servicios**: Respuestas predefinidas sobre servicios
3. **Precios**: Información general de pricing
4. **Contacto**: Datos de contacto de la empresa
5. **Soporte Técnico**: Escalamiento a equipo técnico

### Integración con CRM (opcional)

Si tienes un CRM, puedes integrar el chat:

```javascript
// Crear lead en CRM
const leadData = {
  name: "Usuario del Chat",
  email: extractEmailFromMessage($json.message),
  source: "chat_widget",
  message: $json.message,
  page: $json.page,
  status: "new"
};

// Enviar a CRM via API
```

## Testing

Para probar el webhook:

```bash
curl -X POST "https://tu-n8n-instance.com/webhook/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Quiero agendar una cita",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "sessionId": "test_session",
    "source": "chat_widget",
    "page": "https://tu-sitio.com/"
  }'
```

## Notas Importantes

- El widget usa `mode: "no-cors"` por lo que no puede leer la respuesta del webhook
- Las respuestas del bot son simuladas en el frontend
- Para respuestas dinámicas reales, necesitarías configurar CORS en n8n
- El `sessionId` permite trackear conversaciones
- Todos los mensajes se envían a n8n para procesamiento y almacenamiento
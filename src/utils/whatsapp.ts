export const openWhatsAppQuote = (context?: string) => {
  const phoneNumber = "+1234567890"; // From contactApi.ts
  let message = "Hola! ";
  
  if (context) {
    message += `Estoy interesado en obtener una cotización para: ${context}. ¿Podrían proporcionarme más información y precios?`;
  } else {
    message += "Me gustaría obtener una cotización para servicios cloud. ¿Podrían ayudarme?";
  }
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

export const getServerQuoteContext = (serverType: string, configName?: string) => {
  if (configName) {
    return `Servidor ${serverType} configuración ${configName}`;
  }
  return `Servidor ${serverType}`;
};
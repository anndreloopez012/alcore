// Servicio API simulado para información de contacto
export interface ContactInfo {
  name: string;
  position: string;
  company: string;
  phone: string;
  email: string;
  website: string;
  whatsapp: string;
  telegram: string;
  avatar: string;
}

export const getContactInfo = async (): Promise<ContactInfo> => {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    name: "ALCORE Digital Horizon",
    position: "Soluciones Tecnológicas Completas",
    company: "ALCORE",
    phone: "+1234567890",
    email: "contacto@alcore.dev",
    website: "https://alcore.dev",
    whatsapp: "+1234567890",
    telegram: "@alcore_digital",
    avatar: "/src/assets/alcore-isotipo.png"
  };
};
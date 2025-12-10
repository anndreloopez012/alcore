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
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    name: "ALCORE Technologies Solution",
    position: "Soluciones Tecnológicas Completas",
    company: "ALCORE",
    phone: "+50255794266",
    email: "contacto@alcore-gt.com",
    website: "https://alcore-gt.com/",
    whatsapp: "+50255784266",
    telegram: "@alcoregt",
    avatar: "/src/assets/alcore-isotipo.png",
  };
};

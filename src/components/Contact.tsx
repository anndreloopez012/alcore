import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { openWhatsAppQuote } from "@/utils/whatsapp";

const Contact = () => {
  const contactInfo = {
    phone: "+1234567890",
    email: "contacto@alcore.dev",
    telegram: "@alcore_digital"
  };

  const openEmail = () => {
    window.open(`mailto:${contactInfo.email}?subject=Consulta sobre servicios ALCORE&body=Hola, me gustaría obtener más información sobre sus servicios.`, '_blank');
  };

  const openTelegram = () => {
    window.open(`https://t.me/${contactInfo.telegram.replace('@', '')}`, '_blank');
  };
  return (
    <section className="py-8 relative">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Buttons */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">Contáctanos Directamente</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Elige tu método de contacto preferido para una respuesta inmediata
              </p>

              {/* WhatsApp Button */}
              <Button 
                onClick={() => openWhatsAppQuote("consulta general")}
                className="w-full p-6 h-auto bg-green-600 hover:bg-green-700 text-white"
                size="lg"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-8 w-8" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">WhatsApp</div>
                    <div className="text-sm opacity-90">Respuesta inmediata • {contactInfo.phone}</div>
                  </div>
                </div>
              </Button>

              {/* Email Button */}
              <Button 
                onClick={openEmail}
                className="w-full p-6 h-auto bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">Email</div>
                    <div className="text-sm opacity-90">Respuesta en 24h • {contactInfo.email}</div>
                  </div>
                </div>
              </Button>

              {/* Telegram Button */}
              <Button 
                onClick={openTelegram}
                className="w-full p-6 h-auto bg-sky-500 hover:bg-sky-600 text-white"
                size="lg"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-8 w-8" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">Telegram</div>
                    <div className="text-sm opacity-90">Chat directo • {contactInfo.telegram}</div>
                  </div>
                </div>
              </Button>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  💬 <strong>WhatsApp</strong> para respuestas rápidas<br/>
                  📧 <strong>Email</strong> para consultas detalladas<br/>
                  📱 <strong>Telegram</strong> para chat instantáneo
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact methods */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center glow-primary">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center glow-secondary">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-muted-foreground">{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-light to-accent rounded-lg flex items-center justify-center glow-primary">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Ubicación</p>
                    <p className="text-muted-foreground">Global • Remoto</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why choose us */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">¿Por qué elegir ALCORE?</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Experiencia comprobada en múltiples tecnologías</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                  <span>Soporte técnico 24/7 post-entrega</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Metodologías ágiles y entregas incrementales</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-light rounded-full"></div>
                  <span>Infraestructura cloud escalable y segura</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>100% de clientes satisfechos</span>
                </li>
              </ul>
            </div>

            {/* Response time */}
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">&lt; 24h</div>
              <p className="text-sm text-muted-foreground">Tiempo de respuesta promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-8 relative">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">Envíanos un mensaje</h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre *</label>
                  <Input 
                    placeholder="Tu nombre completo" 
                    className="bg-muted/20 border-border focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Empresa</label>
                  <Input 
                    placeholder="Nombre de tu empresa" 
                    className="bg-muted/20 border-border focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="bg-muted/20 border-border focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Teléfono</label>
                <Input 
                  placeholder="+1 (555) 123-4567" 
                  className="bg-muted/20 border-border focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tipo de Proyecto</label>
                <select className="w-full p-3 bg-muted/20 border border-border rounded-md focus:border-accent transition-colors text-foreground">
                  <option>Desarrollo a Medida</option>
                  <option>Producto de Software</option>
                  <option>Servidores en Nube</option>
                  <option>Consultoría Técnica</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensaje *</label>
                <Textarea 
                  placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier requerimiento específico..."
                  rows={5}
                  className="bg-muted/20 border-border focus:border-accent transition-colors resize-none"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Enviar mensaje
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Campos obligatorios. Responderemos en menos de 24 horas.
              </p>
            </form>
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
                    <p className="text-muted-foreground">contacto@alcore.tech</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center glow-secondary">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
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
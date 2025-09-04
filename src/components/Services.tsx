import { Code, Package, Cloud, Zap, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Desarrollo a Medida",
      description: "Creamos aplicaciones web, móviles y de escritorio adaptadas exactamente a tus necesidades empresariales.",
      features: ["Análisis de requerimientos", "Diseño UX/UI personalizado", "Desarrollo escalable", "Soporte continuo"],
      gradient: "from-primary to-primary-light",
      link: "/desarrollo-medida"
    },
    {
      icon: Package,
      title: "Productos de Software",
      description: "Soluciones de software listas para implementar que aceleran la transformación digital de tu empresa.",
      features: ["Sistemas de gestión", "Aplicaciones empresariales", "Herramientas de automatización", "Integración API"],
      gradient: "from-accent to-primary",
      link: "/productos"
    },
    {
      icon: Cloud,
      title: "Servidores en la Nube",
      description: "Infraestructura escalable y segura en múltiples proveedores cloud para garantizar el mejor rendimiento.",
      features: ["AWS, Azure, Huawei", "Escalabilidad automática", "Backup y recuperación", "Monitoreo 24/7"],
      gradient: "from-primary-light to-accent",
      link: "/servidores-cloud"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Nuestros Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones tecnológicas completas que transforman ideas en realidades digitales exitosas
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 mb-6 glow-primary group-hover:glow-secondary transition-all duration-300`}>
                <service.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <Zap className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={service.link}>
                <Button variant="glow" className="w-full group-hover:shadow-glow-secondary">
                  Más información
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-accent mr-4" />
              <h3 className="text-2xl font-bold">Seguridad Garantizada</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Implementamos las mejores prácticas de seguridad en todos nuestros desarrollos, 
              incluyendo cifrado de datos, autenticación robusta y auditorías de seguridad regulares.
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center mb-6">
              <Rocket className="h-8 w-8 text-primary-light mr-4" />
              <h3 className="text-2xl font-bold">Implementación Ágil</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos metodologías ágiles para entregar resultados rápidos y de calidad, 
              con entregas incrementales que te permiten ver el progreso en tiempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
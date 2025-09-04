import { ShoppingCart, Calculator, TrendingUp, Globe, Phone, FileText, Ticket, Building, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const products = [
    {
      icon: Globe,
      title: "Landing Pages Profesionales",
      description: "Páginas web optimizadas para conversión con diseño moderno y responsivo",
      features: [
        "Diseño responsive optimizado",
        "SEO avanzado incluido",
        "Formularios de contacto",
        "Integración con Google Analytics",
        "Carga ultrarrápida",
        "Hosting incluido por 1 año"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS"],
      category: "Web"
    },
    {
      icon: Calculator,
      title: "Sistema de Contabilidad",
      description: "Solución completa para la gestión contable de su empresa",
      features: [
        "Registro de ingresos y gastos",
        "Generación de reportes financieros",
        "Control de inventarios",
        "Facturación electrónica",
        "Integración bancaria",
        "Backup automático en la nube"
      ],
      technologies: ["React", "Node.js", "PostgreSQL"],
      category: "Finanzas"
    },
    {
      icon: TrendingUp,
      title: "CRM de Ventas",
      description: "Gestione sus clientes, oportunidades y pipeline de ventas eficientemente",
      features: [
        "Gestión de leads y contactos",
        "Pipeline de ventas visual",
        "Automatización de marketing",
        "Reportes de rendimiento",
        "Integración con email",
        "Aplicación móvil incluida"
      ],
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Ventas"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Completo",
      description: "Tienda online con todas las funcionalidades para vender en línea",
      features: [
        "Catálogo de productos ilimitado",
        "Carrito de compras avanzado",
        "Múltiples métodos de pago",
        "Gestión de inventarios",
        "Panel de administración",
        "Integración con redes sociales"
      ],
      technologies: ["React", "Stripe", "AWS"],
      category: "E-Commerce"
    },
    {
      icon: Phone,
      title: "Sistema Call Center",
      description: "Plataforma completa para gestión de llamadas y atención al cliente",
      features: [
        "Gestión de llamadas entrantes",
        "Sistema de colas inteligente",
        "Grabación de llamadas",
        "Reportes de productividad",
        "Integración con CRM",
        "Dashboard en tiempo real"
      ],
      technologies: ["React", "WebRTC", "Node.js"],
      category: "Comunicaciones"
    },
    {
      icon: FileText,
      title: "Sistema de Solicitudes de Compra",
      description: "Automatice y controle todas las solicitudes de compra de su empresa",
      features: [
        "Flujo de aprobaciones configurable",
        "Control presupuestario",
        "Historial de solicitudes",
        "Notificaciones automáticas",
        "Reportes de gastos",
        "Integración con contabilidad"
      ],
      technologies: ["React", "Node.js", "MySQL"],
      category: "Procesos"
    },
    {
      icon: Ticket,
      title: "Sistema de Tickets",
      description: "Gestione eficientemente todas las solicitudes y incidencias",
      features: [
        "Creación automática de tickets",
        "Sistema de prioridades",
        "Asignación automática",
        "SLA y métricas de tiempo",
        "Portal de autoservicio",
        "Notificaciones por email"
      ],
      technologies: ["React", "Node.js", "Redis"],
      category: "Soporte"
    },
    {
      icon: Building,
      title: "Gestión Residencial",
      description: "Plataforma para administración de edificios y comunicación con residentes",
      features: [
        "Portal para residentes",
        "Comunicados y noticias",
        "Reserva de áreas comunes",
        "Control de pagos de mantenimiento",
        "Directorio de residentes",
        "Aplicación móvil incluida"
      ],
      technologies: ["React", "Flutter", "Firebase"],
      category: "Inmobiliario"
    },
    {
      icon: MapPin,
      title: "Control de Asistencia Laboral",
      description: "Sistema avanzado para registro de horas y control de asistencia",
      features: [
        "Check-in/out con geolocalización",
        "Registro de horas trabajadas",
        "Cálculo automático de salarios",
        "Reportes de asistencia",
        "Control de horas extras",
        "Integración con nómina"
      ],
      technologies: ["React Native", "Node.js", "GPS"],
      category: "Recursos Humanos"
    }
  ];

  const categories = ["Todos", "Web", "Finanzas", "Ventas", "E-Commerce", "Comunicaciones", "Procesos", "Soporte", "Inmobiliario", "Recursos Humanos"];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Productos de Software
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Soluciones de software listas para implementar en su empresa. Productos probados y optimizados para diferentes industrias.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                Solicitar Demostración
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <product.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 text-foreground">Características Principales:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Link to="/contacto" className="flex-1">
                      <Button variant="default" size="sm" className="w-full">
                        Solicitar Info
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿No encuentra lo que necesita?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Podemos desarrollar una solución completamente personalizada para su empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/desarrollo-medida">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                Desarrollo a la Medida
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="outline" size="lg">
                Contactar Asesor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductsPage;
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestión Empresarial",
      description: "Plataforma completa de gestión para empresas medianas con módulos de inventario, ventas, CRM y reportes avanzados.",
      image: "🏢",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Desarrollo a Medida",
      status: "Entregado",
      year: "2024"
    },
    {
      title: "App Móvil de Delivery",
      description: "Aplicación multiplataforma para delivery con geolocalización en tiempo real y sistema de pagos integrado.",
      image: "🚚",
      tech: ["React Native", "Firebase", "Stripe", "Google Maps"],
      category: "Aplicación Móvil",
      status: "Entregado",
      year: "2023"
    },
    {
      title: "Plataforma E-commerce B2B",
      description: "Marketplace B2B con catálogo dinámico, sistema de cotizaciones y portal de proveedores.",
      image: "🛒",
      tech: ["PHP", "Laravel", "MySQL", "Azure"],
      category: "E-commerce",
      status: "Entregado",
      year: "2024"
    },
    {
      title: "Sistema de Monitoreo IoT",
      description: "Dashboard para monitoreo de sensores IoT con alertas en tiempo real y análisis predictivo.",
      image: "📊",
      tech: ["TypeScript", "Astro", "InfluxDB", "AWS IoT"],
      category: "IoT & Analytics",
      status: "Entregado",
      year: "2023"
    },
    {
      title: "Portal de Educación Online",
      description: "Plataforma educativa con cursos interactivos, sistema de evaluaciones y certificaciones digitales.",
      image: "🎓",
      tech: ["React", "Node.js", "MongoDB", "Huawei Cloud"],
      category: "EdTech",
      status: "Entregado",
      year: "2024"
    },
    {
      title: "API Gateway Corporativo",
      description: "Microservicios escalables con API Gateway para integración de sistemas empresariales legacy.",
      image: "🔗",
      tech: ["Node.js", "Docker", "Kubernetes", "AWS"],
      category: "Microservicios",
      status: "Entregado",
      year: "2023"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-accent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proyectos <span className="gradient-text">Entregados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Una muestra de las soluciones que hemos desarrollado para nuestros clientes, 
            desde startups hasta empresas consolidadas
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-4">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-3xl font-bold text-primary-light">100%</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte Técnico</div>
            </div>
            <div className="glass-card p-4">
              <div className="text-3xl font-bold text-primary-light">5+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card group p-6 h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image/icon */}
              <div className="text-6xl text-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project info */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary-light text-xs rounded-full border border-primary/30">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-muted/50 text-xs rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project actions */}
              <div className="flex gap-2 mt-auto">
                <Button variant="glow" size="sm" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver más
                </Button>
                <Button variant="ghost" size="sm" className="border border-border">
                  <Github className="h-4 w-4" />
                </Button>
              </div>

              {/* Status indicator */}
              <div className="flex items-center justify-center mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">{project.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="text-muted-foreground mb-6">
              Nos encantaría conocer tu idea y ayudarte a convertirla en realidad con nuestro equipo experto
            </p>
            <Button variant="hero" size="lg" className="group">
              Iniciar proyecto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
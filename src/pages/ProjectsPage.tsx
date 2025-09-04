import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Search, Filter, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const projects = [
    {
      title: "Sistema de Gestión Empresarial",
      description: "Plataforma completa de gestión para empresas medianas con módulos de inventario, ventas, CRM y reportes avanzados.",
      image: "🏢",
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Desarrollo a Medida",
      status: "Entregado",
      year: "2024",
      client: "TechCorp Solutions"
    },
    {
      title: "App Móvil de Delivery",
      description: "Aplicación multiplataforma para delivery con geolocalización en tiempo real y sistema de pagos integrado.",
      image: "🚚",
      tech: ["React Native", "Firebase", "Stripe", "Google Maps"],
      category: "Aplicación Móvil",
      status: "Entregado",
      year: "2023",
      client: "FastFood Chain"
    },
    {
      title: "Plataforma E-commerce B2B",
      description: "Marketplace B2B con catálogo dinámico, sistema de cotizaciones y portal de proveedores.",
      image: "🛒",
      tech: ["PHP", "Laravel", "MySQL", "Azure"],
      category: "E-commerce",
      status: "Entregado",
      year: "2024",
      client: "Industrial Supply Co"
    },
    {
      title: "Sistema de Monitoreo IoT",
      description: "Dashboard para monitoreo de sensores IoT con alertas en tiempo real y análisis predictivo.",
      image: "📊",
      tech: ["TypeScript", "Astro", "InfluxDB", "AWS IoT"],
      category: "IoT & Analytics",
      status: "Entregado",
      year: "2023",
      client: "Smart Factory Inc"
    },
    {
      title: "Portal de Educación Online",
      description: "Plataforma educativa con cursos interactivos, sistema de evaluaciones y certificaciones digitales.",
      image: "🎓",
      tech: ["React", "Node.js", "MongoDB", "Huawei Cloud"],
      category: "EdTech",
      status: "Entregado",
      year: "2024",
      client: "EduTech Academy"
    },
    {
      title: "API Gateway Corporativo",
      description: "Microservicios escalables con API Gateway para integración de sistemas empresariales legacy.",
      image: "🔗",
      tech: ["Node.js", "Docker", "Kubernetes", "AWS"],
      category: "Microservicios",
      status: "Entregado",
      year: "2023",
      client: "Enterprise Corp"
    },
    {
      title: "Sistema de Recursos Humanos",
      description: "Plataforma integral de RRHH con gestión de empleados, nóminas, evaluaciones y reportes.",
      image: "👥",
      tech: ["React", "PHP", "MySQL", "Azure"],
      category: "Desarrollo a Medida",
      status: "Entregado",
      year: "2024",
      client: "HR Solutions Ltd"
    },
    {
      title: "App de Fitness y Salud",
      description: "Aplicación móvil para seguimiento de ejercicios, dietas y métricas de salud con wearables.",
      image: "💪",
      tech: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
      category: "Aplicación Móvil",
      status: "Entregado",
      year: "2023",
      client: "FitLife Wellness"
    },
    {
      title: "Plataforma de Streaming",
      description: "Sistema de video streaming con CDN global, transcoding automático y analytics avanzados.",
      image: "📺",
      tech: ["React", "Node.js", "AWS CloudFront", "FFmpeg"],
      category: "Media & Entertainment",
      status: "Entregado",
      year: "2024",
      client: "StreamTech Media"
    }
  ];

  const categories = ["Todos", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           project.client.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "Todos" || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, projects]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("Todos");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestros <span className="gradient-text">Proyectos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explora nuestra colección de proyectos entregados exitosamente. 
              Cada solución refleja nuestro compromiso con la excelencia tecnológica.
            </p>
          </div>

        </div>
      </section>

      {/* Filters section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Buscar proyectos, tecnologías, clientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-base bg-muted/20 border-border focus:border-accent transition-colors"
              />
            </div>

            {/* Category filters */}
            <div className="flex items-center gap-3">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "shadow-glow-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Clear filters */}
            {(searchTerm || selectedCategory !== "Todos") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Limpiar filtros
              </Button>
            )}
          </div>

          {/* Results count */}
          <div className="mt-4 text-center">
            <p className="text-muted-foreground">
              Mostrando {filteredProjects.length} de {projects.length} proyectos
            </p>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index}
                  className="project-card group p-6 h-full flex flex-col"
                  style={{ animationDelay: `${(index % 9) * 0.1}s` }}
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

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Cliente:</p>
                      <p className="text-sm font-medium">{project.client}</p>
                    </div>

                    {/* Tech stack */}
                    <div className="mb-6">
                      <p className="text-xs text-muted-foreground mb-2">Tecnologías:</p>
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
          ) : (
            <div className="text-center py-16">
              <div className="glass-card p-12 max-w-md mx-auto">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-xl font-bold mb-4">No se encontraron proyectos</h3>
                <p className="text-muted-foreground mb-6">
                  Intenta ajustar tus filtros de búsqueda para encontrar más resultados.
                </p>
                <Button onClick={clearFilters} variant="hero">
                  Limpiar filtros
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
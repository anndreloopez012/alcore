import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-muted/20 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/lovable-uploads/77d0db25-69ef-49e6-b294-6ef7fa9d418f.png" 
                  alt="ALCORE Technologies Solutions" 
                  className="h-8"
                />
                <span className="text-xl font-bold gradient-text">ALCORE</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Transformamos ideas en soluciones tecnológicas exitosas. Especializados en desarrollo a medida, 
                productos de software y servicios de nube escalables.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-accent">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Desarrollo a Medida</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Productos de Software</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Servidores en Nube</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Consultoría Técnica</a></li>
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tecnologías</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">React & React Native</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">TypeScript & JavaScript</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">PHP & Node.js</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">AWS, Azure, Huawei</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-muted-foreground text-sm">
                © 2024 ALCORE Technologies Solutions. Todos los derechos reservados.
              </div>
              
              <div className="flex items-center gap-6">
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Política de Privacidad
                </a>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Términos de Servicio
                </a>
                
                {/* Scroll to top button */}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={scrollToTop}
                  className="hover:text-accent hover:shadow-glow-primary transition-all duration-300"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
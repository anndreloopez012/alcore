import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Cpu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ 
            transform: `translateY(${scrollY * -0.15}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl animate-float"
          style={{ 
            transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`,
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code 
          className="absolute top-32 left-32 w-8 h-8 text-accent/40 animate-float" 
          style={{ animationDelay: '1s' }}
        />
        <Cloud 
          className="absolute top-48 right-48 w-6 h-6 text-primary-light/40 animate-float" 
          style={{ animationDelay: '3s' }}
        />
        <Cpu 
          className="absolute bottom-48 left-48 w-7 h-7 text-accent/30 animate-float" 
          style={{ animationDelay: '5s' }}
        />
        
        {/* Matrix-like background lines */}
        <div className="absolute inset-0">
          <div className="matrix-bg w-4 h-full opacity-20" style={{ animationDelay: '0s' }} />
          <div className="matrix-bg w-2 h-full opacity-15" style={{ animationDelay: '5s' }} />
          <div className="matrix-bg w-6 h-full opacity-10" style={{ animationDelay: '10s' }} />
        </div>
        
        {/* Floating code elements */}
        <div className="absolute top-16 right-16 text-accent/10 font-mono text-xs animate-float code-highlight p-2 rounded" style={{ animationDelay: '2s' }}>
          {'<ALCORE />'}
        </div>
        <div className="absolute bottom-16 left-16 text-primary-light/10 font-mono text-xs animate-float code-highlight p-2 rounded" style={{ animationDelay: '4s' }}>
          {'npm run dev'}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/7939aa51-6ace-4a2e-b865-7f1ca2d69f21.png" 
              alt="ALCORE Technologies Solutions" 
              className="h-20 mx-auto mb-6 glow-primary"
            />
          </div>

          {/* Main headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">ALCORE</span>
            <br />
            <span className="text-foreground">Technologies</span>
            <br />
            <span className="text-accent text-4xl md:text-6xl font-light">Solutions</span>
          </h1>

          {/* Subtitle with typing effect for dev keywords */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Desarrollamos soluciones tecnológicas a la medida, productos de software innovadores 
            y servicios de nube escalables para impulsar tu negocio hacia el futuro
          </p>
          
          {/* Developer keywords with typing effect */}
          <div className="text-accent font-mono text-sm mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <span className="typing">{'> Building the future with code'}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/proyectos">
                Conoce nuestros proyectos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" onClick={() => scrollToSection('servicios')}>
              Nuestros servicios
            </Button>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-6 tech-card">
              <Code className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Desarrollo a Medida</h3>
              <p className="text-muted-foreground text-sm">Soluciones personalizadas con las últimas tecnologías</p>
            </div>
            <div className="glass-card p-6 tech-card">
              <Cpu className="h-12 w-12 text-primary-light mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Productos Software</h3>
              <p className="text-muted-foreground text-sm">Software listo para implementar en tu empresa</p>
            </div>
            <div className="glass-card p-6 tech-card">
              <Cloud className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Servidores en Nube</h3>
              <p className="text-muted-foreground text-sm">Infraestructura escalable y segura en la nube</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
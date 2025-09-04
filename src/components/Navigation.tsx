import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Cloud, Users, Mail, Home, FolderOpen } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: "Inicio", href: "/", icon: Home, section: "hero" },
    { name: "Servicios", href: "/#servicios", icon: Code, section: "servicios" },
    { name: "Tecnologías", href: "/#tecnologias", icon: Cloud, section: "tecnologias" },
    { name: "Proyectos", href: "/proyectos", icon: FolderOpen, section: "proyectos" },
    { name: "Contacto", href: "/contacto", icon: Mail, section: "contacto" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (item: typeof navigationItems[0], e: React.MouseEvent) => {
    e.preventDefault();
    
    if (item.href.startsWith('/#')) {
      if (location.pathname !== '/') {
        // Navegar a home primero usando React Router, luego hacer scroll
        navigate('/');
        setTimeout(() => scrollToSection(item.section), 400); // Increased delay for transition
      } else {
        scrollToSection(item.section);
      }
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/contacto');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-transparent">
      <div className="container mx-auto px-4 pt-4">
        <div className={`glass-card backdrop-blur-xl transition-all duration-500 rounded-2xl border border-border/20 max-w-6xl mx-auto ${
          scrolled ? 'shadow-2xl glow-primary py-3' : 'shadow-lg py-4'
        }`}>
          <div className="px-6">
            <div className="flex items-center justify-between">
            {/* Logo with Isotipo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/lovable-uploads/77d0db25-69ef-49e6-b294-6ef7fa9d418f.png" 
                alt="ALCORE Technologies Solutions" 
                className="h-8 group-hover:glow-primary transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.href.startsWith('/#') ? (
                    <button
                      onClick={(e) => handleNavClick(item, e)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group relative overflow-hidden"
                    >
                      <item.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                      <span className="text-sm font-medium">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group relative overflow-hidden"
                    >
                      <item.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                      <span className="text-sm font-medium">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  )}
                </div>
              ))}
              
              <Button variant="hero" size="sm" className="ml-4 px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <button onClick={handleContactClick}>
                  Comenzar Proyecto
                </button>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-accent/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 z-[9999]">
            <div className="glass-card backdrop-blur-xl rounded-2xl border border-border/20 shadow-2xl overflow-hidden bg-background/95">
              <div className="px-6 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.href.startsWith('/#') ? (
                      <button
                        onClick={(e) => handleNavClick(item, e)}
                        className="flex items-center gap-3 w-full text-left p-3 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group"
                      >
                        <item.icon className="h-5 w-5 group-hover:text-accent transition-colors" />
                        <span className="font-medium">{item.name}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 w-full text-left p-3 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group"
                      >
                        <item.icon className="h-5 w-5 group-hover:text-accent transition-colors" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <Button variant="hero" className="w-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <button onClick={(e) => {
                      handleContactClick(e);
                      setIsMenuOpen(false);
                    }}>
                      Comenzar Proyecto
                    </button>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
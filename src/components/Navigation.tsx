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
        setTimeout(() => scrollToSection(item.section), 100);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-card backdrop-blur-xl shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/lovable-uploads/04ac750a-ff32-4fc0-b575-89a9aa6bda51.png" 
              alt="ALCORE Logo" 
              className="h-8 group-hover:glow-primary transition-all duration-300"
            />
            <span className="text-xl font-bold gradient-text">ALCORE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.href.startsWith('/#') ? (
                  <button
                    onClick={(e) => handleNavClick(item, e)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                  >
                    <item.icon className="h-4 w-4 group-hover:text-accent" />
                    <span>{item.name}</span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300 group"
                  >
                    <item.icon className="h-4 w-4 group-hover:text-accent" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
            
            <Button variant="hero" size="sm">
              <button onClick={handleContactClick}>
                Comenzar Proyecto
              </button>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-card backdrop-blur-xl border-t border-border">
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.href.startsWith('/#') ? (
                    <button
                      onClick={(e) => handleNavClick(item, e)}
                      className="flex items-center gap-3 w-full text-left p-2 rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 w-full text-left p-2 rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-border">
                <Button variant="hero" className="w-full">
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
        )}
      </div>
    </nav>
  );
};

export default Navigation;
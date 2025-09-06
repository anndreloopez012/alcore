import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Cloud, Users, Mail, Home, FolderOpen, Settings, Package, ChevronDown, MessageCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
    { name: "Servicios", href: "/#servicios", icon: Code, section: "servicios", hasDropdown: true },
    { name: "Tecnologías", href: "/#tecnologias", icon: Cloud, section: "tecnologias" },
    { name: "Proyectos", href: "/proyectos", icon: FolderOpen, section: "proyectos" },
    { name: "Contacto", href: "/contacto", icon: Mail, section: "contacto" },
  ];

  const servicesSubmenu = [
    { name: "Desarrollo a Medida", href: "/desarrollo-medida", icon: Settings },
    { name: "Productos de Software", href: "/productos", icon: Package },
    { name: "Servidores en la Nube", href: "/servidores-cloud", icon: Cloud },
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
        navigate('/');
        setTimeout(() => scrollToSection(item.section), 400);
      } else {
        scrollToSection(item.section);
      }
    }
    setIsMenuOpen(false);
  };

  // ESTILOS INLINE FIJOS - NO SE PUEDEN SOBRESCRIBIR
  const navStyles = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 10000,
    backgroundColor: 'transparent',
    pointerEvents: 'none' as const
  };

  const containerStyles = {
    pointerEvents: 'auto' as const,
    margin: '0 auto',
    padding: '1rem',
    maxWidth: '1200px'
  };

  const mobileMenuStyles = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    paddingTop: '6rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    zIndex: 9999,
    backgroundColor: 'transparent'
  };

  return (
    <>
      {/* NAVEGACIÓN FIJA */}
      <div style={navStyles}>
        <div style={containerStyles}>
          <div className={`glass-card backdrop-blur-xl transition-all duration-500 rounded-2xl border border-border/20 ${
            scrolled ? 'shadow-2xl glow-primary py-3' : 'shadow-lg py-4'
          }`}>
            <div className="px-6">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group">
                  <img 
                    src="/lovable-uploads/7939aa51-6ace-4a2e-b865-7f1ca2d69f21.png" 
                    alt="ALCORE Technologies Solutions" 
                    className="h-8 group-hover:glow-primary transition-all duration-300"
                  />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-2">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="relative">
                      {item.hasDropdown ? (
                        <div 
                          className="relative"
                          onMouseEnter={() => setServicesDropdownOpen(true)}
                          onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                          <button
                            onClick={(e) => handleNavClick(item, e)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group relative overflow-hidden"
                          >
                            <item.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                            <span className="text-sm font-medium">{item.name}</span>
                            <ChevronDown className="h-3 w-3 transition-transform duration-300" />
                          </button>
                          
                          {/* Services Dropdown */}
                          {servicesDropdownOpen && (
                            <div 
                              style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                marginTop: '0.5rem',
                                width: '14rem',
                                zIndex: 10001,
                                backgroundColor: 'rgba(var(--background), 0.95)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(var(--border), 0.2)',
                                borderRadius: '0.75rem',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                overflow: 'hidden'
                              }}
                            >
                              <div className="py-2">
                                {servicesSubmenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group"
                                    onClick={() => setServicesDropdownOpen(false)}
                                  >
                                    <subItem.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                                    <span className="text-sm font-medium">{subItem.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ) : item.href.startsWith('/#') ? (
                        <button
                          onClick={(e) => handleNavClick(item, e)}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group relative overflow-hidden"
                        >
                          <item.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                          <span className="text-sm font-medium">{item.name}</span>
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group relative overflow-hidden"
                        >
                          <item.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                          <span className="text-sm font-medium">{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <Button variant="hero" size="sm" className="ml-4 px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link to="/contacto">
                      Comenzar Proyecto
                    </Link>
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
        </div>
      </div>

      {/* MENÚ MÓVIL FIJO */}
      {isMenuOpen && (
        <div style={mobileMenuStyles} className="md:hidden">
          <div className="glass-card backdrop-blur-xl rounded-2xl border border-border/20 shadow-2xl overflow-hidden bg-background/95 max-w-6xl mx-auto mt-2">
            <div className="px-6 py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={(e) => handleNavClick(item, e)}
                        className="flex items-center gap-3 w-full text-left p-3 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group"
                      >
                        <item.icon className="h-5 w-5 group-hover:text-accent transition-colors" />
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className="h-4 w-4 ml-auto" />
                      </button>
                      <div className="ml-6 mt-2 space-y-1">
                        {servicesSubmenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 w-full text-left p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 group text-sm"
                          >
                            <subItem.icon className="h-4 w-4 group-hover:text-accent transition-colors" />
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.href.startsWith('/#') ? (
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
                <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="w-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Comenzar Proyecto
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
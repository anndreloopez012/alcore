import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Cloud, Users, Mail, Home, FolderOpen, Settings, Package, ChevronDown, MessageCircle, CreditCard, Workflow } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { openWhatsAppQuote } from "@/utils/whatsapp";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    { 
      name: "Servicios", 
      href: "/#servicios", 
      icon: Code, 
      section: "servicios", 
      hasDropdown: true,
      submenu: [
        { name: "Desarrollo a Medida", href: "/desarrollo-medida", icon: Settings, description: "Soluciones personalizadas" },
        { name: "Productos de Software", href: "/productos", icon: Package, description: "Software listo para usar" },
        { name: "Servidores en la Nube", href: "/servidores-cloud", icon: Cloud, description: "Infraestructura escalable" },
        { name: "Automatizaciones con n8n", href: "/automatizaciones", icon: Workflow, description: "Automatiza tus procesos" },
      ]
    },
    { name: "Tecnologías", href: "/#tecnologias", icon: Cloud, section: "tecnologias" },
    { name: "Proyectos", href: "/proyectos", icon: FolderOpen, section: "proyectos" },
    { 
      name: "Contacto", 
      href: "/contacto", 
      icon: Mail, 
      section: "contacto", 
      hasDropdown: true,
      submenu: [
        { name: "Formulario de Contacto", href: "/contacto", icon: Mail, description: "Contáctanos directamente" },
        { name: "Tarjeta Digital", href: "/tarjeta", icon: CreditCard, description: "Información de contacto" },
      ]
    },
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
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* FLOATING NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group z-50">
              <img 
                src="/assets/alcore-logo.png" 
                alt="ALCORE Technologies Solutions" 
                className="h-8 group-hover:scale-110 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          handleNavClick(item, e);
                          handleDropdownToggle(item.name);
                        }}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          activeDropdown === item.name
                            ? 'bg-primary/10 text-primary'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-72 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl z-50"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-2">
                            {item.submenu?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start gap-3 p-3 rounded-lg text-sm hover:bg-muted/50 transition-colors group"
                              >
                                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                  <subItem.icon className="h-4 w-4" />
                                </div>
                                <div>
                                  <div className="font-medium text-foreground">{subItem.name}</div>
                                  <div className="text-xs text-muted-foreground">{subItem.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : item.href.startsWith('/#') ? (
                    <button
                      onClick={(e) => handleNavClick(item, e)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              <Button 
                onClick={() => openWhatsAppQuote("comenzar nuevo proyecto")}
                size="sm" 
                className="ml-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium px-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Comenzar Proyecto
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full p-3 rounded-lg text-left font-medium hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <div className="ml-6 mt-2 space-y-1">
                            {item.submenu?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="flex items-center gap-3 p-2 rounded-lg text-sm hover:bg-muted/50 transition-colors"
                              >
                                <subItem.icon className="h-4 w-4" />
                                <span>{subItem.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : item.href.startsWith('/#') ? (
                      <button
                        onClick={(e) => handleNavClick(item, e)}
                        className="flex items-center gap-3 w-full p-3 rounded-lg text-left font-medium hover:bg-muted/50 transition-colors"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 w-full p-3 rounded-lg text-left font-medium hover:bg-muted/50 transition-colors"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-border">
                  <Button 
                    onClick={() => {
                      setIsMenuOpen(false);
                      openWhatsAppQuote("comenzar nuevo proyecto");
                    }}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium shadow-lg"
                  >
                    Comenzar Proyecto
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;
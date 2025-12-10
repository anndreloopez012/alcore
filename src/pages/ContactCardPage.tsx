import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Globe, MessageCircle, Send, Download, Package, Cloud, Code, Cpu, ArrowRight } from 'lucide-react';
import { getContactInfo, ContactInfo } from '@/services/contactApi';
import { Link } from 'react-router-dom';

const ContactCardPage = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const loadContactInfo = async () => {
      try {
        const info = await getContactInfo();
        setContactInfo(info);
      } catch (error) {
        console.error('Error loading contact info:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContactInfo();
  }, []);

  const handleCall = () => {
    if (contactInfo?.phone) {
      window.open(`tel:${contactInfo.phone}`, '_self');
    }
  };

  const handleSaveContact = () => {
    if (contactInfo) {
      const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
TITLE:${contactInfo.position}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
END:VCARD`;
      
      const blob = new Blob([vcard], { type: 'text/vcard' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${contactInfo.company}-contact.vcf`;
      link.click();
      window.URL.revokeObjectURL(url);
    }
  };

  const handleEmail = () => {
    if (contactInfo?.email) {
      window.open(`mailto:${contactInfo.email}?subject=Contacto desde tarjeta digital`, '_blank');
    }
  };

  const handleWhatsApp = () => {
    if (contactInfo?.whatsapp) {
      const message = encodeURIComponent('Hola! Me contacto desde su tarjeta digital de ALCORE');
      window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank');
    }
  };

  const handleTelegram = () => {
    if (contactInfo?.telegram) {
      window.open(`https://t.me/${contactInfo.telegram.replace('@', '')}`, '_blank');
    }
  };

  const handleWebsite = () => {
    if (contactInfo?.website) {
      window.open(contactInfo.website, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Animated background elements like Hero */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary relative z-10"></div>
      </div>
    );
  }

  if (!contactInfo) {
    return (
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <p className="text-muted-foreground relative z-10">Error cargando información de contacto</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden p-4 pwa-content">
      {/* Animated background elements like Hero */}
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
          {'<ContactCard />'}
        </div>
        <div className="absolute bottom-16 left-16 text-primary-light/10 font-mono text-xs animate-float code-highlight p-2 rounded" style={{ animationDelay: '4s' }}>
          {'digital.contact()'}
        </div>
      </div>

      <div className="w-full max-w-md mx-auto relative z-10">
        <Card className="glass-card shadow-2xl transform transition-all duration-300 hover:scale-105 tech-card">
          <CardContent className="p-8">
            {/* Header con logo y info principal */}
            <div className="text-center mb-8 animate-fade-in">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <img 
                  src="/assets/alcore-logo.png" 
                  alt="ALCORE Technologies" 
                  className="w-full h-full object-contain glow-primary"
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-card animate-pulse flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              <h1 className="text-2xl font-bold mb-2">
                <span className="gradient-text">{contactInfo.name}</span>
              </h1>
              <p className="text-accent font-semibold mb-1">{contactInfo.position}</p>
              <p className="text-sm text-muted-foreground font-mono">
                {'> Building the future with code'}
              </p>
            </div>

            {/* Tech stack indicators */}
            <div className="flex justify-center gap-4 mb-6">
              <div className="tech-badge">
                <Code className="h-4 w-4" />
                <span className="text-xs">Dev</span>
              </div>
              <div className="tech-badge">
                <Cloud className="h-4 w-4" />
                <span className="text-xs">Cloud</span>
              </div>
              <div className="tech-badge">
                <Cpu className="h-4 w-4" />
                <span className="text-xs">AI</span>
              </div>
            </div>

            {/* Botones de contacto principales - Estilo más profesional */}
            <div className="space-y-3 mb-6">
              <Button
                onClick={handleCall}
                variant="hero"
                className="w-full flex items-center justify-between group h-12"
              >
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>Llamar Ahora</span>
                </div>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleEmail}
                  variant="glass"
                  className="flex flex-col items-center justify-center gap-1 h-16 group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs">Email</span>
                </Button>
                
                <Button
                  onClick={handleSaveContact}
                  variant="glass"
                  className="flex flex-col items-center justify-center gap-1 h-16 group"
                >
                  <Download className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs">Guardar</span>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleWhatsApp}
                  className="flex flex-col items-center justify-center gap-1 h-16 bg-green-600 hover:bg-green-700 group"
                >
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs">WhatsApp</span>
                </Button>
                
                <Button
                  onClick={handleTelegram}
                  className="flex flex-col items-center justify-center gap-1 h-16 bg-blue-500 hover:bg-blue-600 group"
                >
                  <Send className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs">Telegram</span>
                </Button>
              </div>

              <Button
                onClick={handleWebsite}
                variant="glass"
                className="w-full flex items-center justify-between group h-12"
              >
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5" />
                  <span>Sitio Web</span>
                </div>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Separador con estilo tech */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-accent/20"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-4 text-accent font-mono">{'< Servicios />'}</span>
              </div>
            </div>

            {/* Botones de servicios con mejor diseño */}
            <div className="space-y-3">
              <Link to="/productos" className="block">
                <Button
                  variant="glass"
                  className="w-full flex items-center justify-between group h-14 hover:bg-primary/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Software Products</div>
                      <div className="text-xs text-muted-foreground">Soluciones listas para usar</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/servidores-cloud" className="block">
                <Button
                  variant="glass"
                  className="w-full flex items-center justify-between group h-14 hover:bg-accent/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Cloud className="h-5 w-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Cloud Servers</div>
                      <div className="text-xs text-muted-foreground">Infraestructura escalable</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Footer tech */}
            <div className="mt-6 pt-4 text-center">
              <p className="text-xs text-muted-foreground font-mono">
                {'> Powered by ALCORE Technologies'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactCardPage;
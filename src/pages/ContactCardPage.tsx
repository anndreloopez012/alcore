import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Globe, MessageCircle, Send, Download, Package, Cloud } from 'lucide-react';
import { getContactInfo, ContactInfo } from '@/services/contactApi';
import { Link } from 'react-router-dom';

const ContactCardPage = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);

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
      window.open(`mailto:${contactInfo.email}?subject=Contacto desde página web`, '_blank');
    }
  };

  const handleWhatsApp = () => {
    if (contactInfo?.whatsapp) {
      const message = encodeURIComponent('Hola! Me contacto desde su página web');
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
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!contactInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center">
        <p className="text-muted-foreground">Error cargando información de contacto</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        <Card className="backdrop-blur-sm bg-card/95 border-border/50 shadow-2xl transform transition-all duration-300 hover:scale-105">
          <CardContent className="p-8">
            {/* Header con avatar y info principal */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-primary-foreground">AC</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-card animate-pulse"></div>
              </div>
              
              <h1 className="text-2xl font-bold text-foreground mb-2 gradient-text">
                {contactInfo.name}
              </h1>
              <p className="text-muted-foreground font-medium mb-1">{contactInfo.position}</p>
              <p className="text-sm text-muted-foreground">{contactInfo.company}</p>
            </div>

            {/* Botones de contacto principales */}
            <div className="space-y-3 mb-6">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleCall}
                  className="flex items-center justify-center gap-2 h-12 bg-green-600 hover:bg-green-700 transition-all duration-300"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">Llamar</span>
                </Button>
                
                <Button
                  onClick={handleSaveContact}
                  variant="outline"
                  className="flex items-center justify-center gap-2 h-12 transition-all duration-300"
                >
                  <Download className="h-4 w-4" />
                  <span className="text-sm">Guardar</span>
                </Button>
              </div>

              <Button
                onClick={handleEmail}
                variant="outline"
                className="w-full flex items-center justify-center gap-2 h-12 transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 h-12 bg-green-500 hover:bg-green-600 transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="text-sm">WhatsApp</span>
                </Button>
                
                <Button
                  onClick={handleTelegram}
                  className="flex items-center justify-center gap-2 h-12 bg-blue-500 hover:bg-blue-600 transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                  <span className="text-sm">Telegram</span>
                </Button>
              </div>

              <Button
                onClick={handleWebsite}
                variant="outline"
                className="w-full flex items-center justify-center gap-2 h-12 transition-all duration-300"
              >
                <Globe className="h-4 w-4" />
                <span>Sitio Web</span>
              </Button>
            </div>

            {/* Separador */}
            <div className="border-t border-border/50 pt-6 mt-6">
              <p className="text-xs text-muted-foreground text-center mb-4">Nuestros Servicios</p>
              
              {/* Botones adicionales para servicios */}
              <div className="space-y-3">
                <Link to="/productos">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 h-12 transition-all duration-300 hover:bg-primary/10"
                  >
                    <Package className="h-4 w-4" />
                    <span>Productos de Software</span>
                  </Button>
                </Link>
                
                <Link to="/servidores-cloud">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 h-12 transition-all duration-300 hover:bg-primary/10"
                  >
                    <Cloud className="h-4 w-4" />
                    <span>Servidores en la Nube</span>
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactCardPage;
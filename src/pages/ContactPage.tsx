import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero section */}
      <section className="pt-24 pb-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hablemos de tu <span className="gradient-text">Proyecto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos listos para transformar tus ideas en soluciones tecnológicas exitosas. 
              Contáctanos y comenzemos a construir el futuro juntos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-4">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
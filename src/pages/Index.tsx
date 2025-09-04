import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section id="hero"><Hero /></section>
        <section id="servicios"><Services /></section>
        <section id="tecnologias"><Technologies /></section>
        <section id="contacto"><Contact /></section>
      </div>
      <Footer />
    </main>
  );
};

export default Index;

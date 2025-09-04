import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24">
        <section id="hero"><Hero /></section>
        <section id="servicios"><Services /></section>
        <section id="tecnologias"><Technologies /></section>
      </div>
      <Footer />
      <FloatingChat />
    </main>
  );
};

export default Index;

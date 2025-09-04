import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

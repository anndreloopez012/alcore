import { useEffect, useState } from "react";

const Technologies = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    { name: "React", color: "text-blue-400", icon: "⚛️" },
    { name: "TypeScript", color: "text-blue-500", icon: "📘" },
    { name: "JavaScript", color: "text-yellow-400", icon: "🟨" },
    { name: "PHP", color: "text-purple-400", icon: "🐘" },
    { name: "Node.js", color: "text-green-400", icon: "🟢" },
    { name: "React Native", color: "text-cyan-400", icon: "📱" },
    { name: "Flutter", color: "text-blue-300", icon: "🦋" },
    { name: "CSS", color: "text-blue-600", icon: "🎨" },
    { name: "AJAX", color: "text-orange-400", icon: "🔄" },
    { name: "Astro", color: "text-purple-500", icon: "🚀" }
  ];

  const cloudProviders = [
    { name: "AWS", logo: "☁️", color: "text-orange-400" },
    { name: "Azure", logo: "🌐", color: "text-blue-400" },
    { name: "Huawei Cloud", logo: "🏗️", color: "text-red-400" },
    { name: "Servidores Físicos", logo: "🖥️", color: "text-gray-300" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-10 left-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Technologies Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Tecnologías</span> que Dominamos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utilizamos las tecnologías más avanzadas y probadas del mercado para crear soluciones robustas y escalables
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="tech-card p-6 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className={`font-semibold ${tech.color} group-hover:text-accent transition-colors`}>
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Cloud Infrastructure Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Infraestructura <span className="gradient-text">Cloud</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Desplegamos en múltiples proveedores de nube para garantizar la mejor performance y disponibilidad
          </p>

          {/* Cloud providers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudProviders.map((provider, index) => (
              <div 
                key={index}
                className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 group-hover:animate-bounce">
                  {provider.logo}
                </div>
                <h4 className={`text-lg font-bold ${provider.color} group-hover:text-accent transition-colors`}>
                  {provider.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Features */}
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Stack Tecnológico Completo</h3>
            <p className="text-muted-foreground">Cobertura integral desde frontend hasta infraestructura</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                <span className="text-2xl">🖥️</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Frontend</h4>
              <p className="text-muted-foreground text-sm">React, TypeScript, CSS moderno para interfaces excepcionales</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 glow-secondary">
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Backend</h4>
              <p className="text-muted-foreground text-sm">Node.js, PHP y tecnologías server-side robustas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-light to-accent rounded-full flex items-center justify-center mx-auto mb-4 glow-primary">
                <span className="text-2xl">☁️</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Cloud & DevOps</h4>
              <p className="text-muted-foreground text-sm">AWS, Azure, Huawei y infraestructura escalable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
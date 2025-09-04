import { useEffect, useState } from "react";
import { Code2, Terminal, Database, Brackets, GitBranch } from "lucide-react";

// Import technology logos
import reactLogo from "@/assets/logos/react-logo.png";
import typescriptLogo from "@/assets/logos/typescript-logo.png";
import javascriptLogo from "@/assets/logos/javascript-logo.png";
import phpLogo from "@/assets/logos/php-logo.png";
import nodejsLogo from "@/assets/logos/nodejs-logo.png";
import reactNativeLogo from "@/assets/logos/react-native-logo.png";
import flutterLogo from "@/assets/logos/flutter-logo.png";
import cssLogo from "@/assets/logos/css-logo.png";
import astroLogo from "@/assets/logos/astro-logo.png";
import awsLogo from "@/assets/logos/aws-logo.png";
import azureLogo from "@/assets/logos/azure-logo.png";
import huaweiLogo from "@/assets/logos/huawei-logo.png";
import codeBackground from "@/assets/code-background.jpg";

const Technologies = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologies = [
    { name: "React", logo: reactLogo, category: "Frontend" },
    { name: "TypeScript", logo: typescriptLogo, category: "Language" },
    { name: "JavaScript", logo: javascriptLogo, category: "Language" },
    { name: "PHP", logo: phpLogo, category: "Backend" },
    { name: "Node.js", logo: nodejsLogo, category: "Backend" },
    { name: "React Native", logo: reactNativeLogo, category: "Mobile" },
    { name: "Flutter", logo: flutterLogo, category: "Mobile" },
    { name: "CSS", logo: cssLogo, category: "Frontend" },
    { name: "Astro", logo: astroLogo, category: "Framework" },
    { name: "AJAX", icon: "🔄", category: "Web API" }
  ];

  const cloudProviders = [
    { name: "AWS", logo: awsLogo },
    { name: "Azure", logo: azureLogo },
    { name: "Huawei Cloud", logo: huaweiLogo },
    { name: "Servidores Físicos", icon: "🖥️" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Code background overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${codeBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Floating code elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Code2 
          className="absolute top-16 left-16 w-6 h-6 text-accent/20 animate-float" 
          style={{ animationDelay: '0s' }}
        />
        <Terminal 
          className="absolute top-32 right-32 w-8 h-8 text-primary-light/30 animate-float" 
          style={{ animationDelay: '2s' }}
        />
        <Database 
          className="absolute bottom-32 left-32 w-7 h-7 text-accent/25 animate-float" 
          style={{ animationDelay: '4s' }}
        />
        <Brackets 
          className="absolute bottom-48 right-48 w-6 h-6 text-primary/20 animate-float" 
          style={{ animationDelay: '1s' }}
        />
        <GitBranch 
          className="absolute top-48 left-1/2 w-5 h-5 text-accent/30 animate-float" 
          style={{ animationDelay: '3s' }}
        />
        
        {/* Floating code snippets */}
        <div className="absolute top-20 right-20 text-accent/10 font-mono text-xs animate-float" style={{ animationDelay: '1.5s' }}>
          {'{ "framework": "react" }'}
        </div>
        <div className="absolute bottom-20 left-20 text-primary-light/10 font-mono text-xs animate-float" style={{ animationDelay: '3.5s' }}>
          {'const app = () => { }'}
        </div>
        <div className="absolute top-1/2 right-1/4 text-accent/15 font-mono text-xs animate-float" style={{ animationDelay: '2.5s' }}>
          {'npm install'}
        </div>
      </div>
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
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center items-center h-16">
                {tech.logo ? (
                  <img 
                    src={tech.logo} 
                    alt={`${tech.name} logo`} 
                    className="h-12 w-12 object-contain filter group-hover:brightness-110"
                  />
                ) : (
                  <div className="text-4xl">{tech.icon}</div>
                )}
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                {tech.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
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
                <div className="mb-4 group-hover:animate-bounce flex justify-center items-center h-16">
                  {provider.logo ? (
                    <img 
                      src={provider.logo} 
                      alt={`${provider.name} logo`} 
                      className="h-12 w-auto object-contain filter group-hover:brightness-110"
                    />
                  ) : (
                    <div className="text-6xl">{provider.icon}</div>
                  )}
                </div>
                <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                  {provider.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Features */}
        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Code pattern overlay */}
          <div className="absolute top-0 right-0 text-accent/5 font-mono text-xs leading-4 pointer-events-none">
            <pre className="whitespace-pre-wrap">
{`import React from 'react';
import { useState, useEffect } from 'react';

const TechStack = () => {
  const [technologies, setTechnologies] = useState([]);
  
  useEffect(() => {
    loadTechnologies();
  }, []);
  
  return (
    <div className="tech-stack">
      {technologies.map(tech => (
        <TechCard key={tech.id} {...tech} />
      ))}
    </div>
  );
};`}
            </pre>
          </div>
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
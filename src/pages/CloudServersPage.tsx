import PageTransition from "@/components/PageTransition";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Server, Cpu, Zap, Shield, Globe, Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CloudServersPage = () => {
  const serverTypes = [
    {
      type: "Shared vCPU Intel®",
      series: "CX",
      description: "Best price-performance ratio",
      features: ["Shared vCPU", "Intel processors", "Ideal for development and testing", "Scalable resources"],
      icon: <Cpu className="h-8 w-8" />,
      color: "bg-blue-500"
    },
    {
      type: "Shared vCPU AMD",
      series: "CPX", 
      description: "VPS based on AMD Epyc™",
      features: ["AMD Epyc™ processors", "Enhanced performance", "Shared vCPU", "Cost-effective"],
      icon: <Zap className="h-8 w-8" />,
      color: "bg-red-500"
    },
    {
      type: "Shared vCPU Ampere®",
      series: "CAX",
      description: "Efficient Arm64 architecture",
      features: ["Arm64 architecture", "Energy efficient", "Modern technology", "Optimal performance per watt"],
      icon: <Globe className="h-8 w-8" />,
      color: "bg-green-500"
    },
    {
      type: "Dedicated vCPU",
      series: "CCX",
      description: "Best for production workloads",
      features: ["Dedicated vCPU cores", "Low latency", "High performance", "Production-ready"],
      icon: <Server className="h-8 w-8" />,
      color: "bg-purple-500"
    }
  ];

  const useCases = [
    {
      title: "Dedicated vCPU",
      description: "Ideal for business critical applications and production-ready use cases with high workloads",
      applications: ["High-traffic websites", "Gaming servers", "Machine learning", "Big data processing"],
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Shared vCPU",
      description: "Perfect for development, testing, and applications with variable workloads",
      applications: ["Development environments", "Small to medium websites", "API services", "Testing platforms"],
      icon: <Database className="h-6 w-6" />
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <Navigation />
        
        <main className="pt-32 pb-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 text-center mb-20">
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 text-sm px-4 py-2">
                Servidores Cloud
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent mb-6">
                Servidores en la Nube
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                La mejor solución cloud simple que tus proyectos exigentes merecen. 
                Hosting en la nube galardonado con el mejor rendimiento precio.
              </p>
            </div>
          </section>

          {/* Server Types Section */}
          <section className="container mx-auto px-4 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Elige tu Servidor Cloud Favorito
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ya sea que busques el servidor cloud con la mejor relación calidad-precio, necesites poder exclusivo 
                para tus cargas de trabajo de producción o quieras aprovechar la arquitectura Arm64.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serverTypes.map((server, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${server.color} rounded-xl text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {server.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{server.type}</CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">{server.series}</Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base mb-4 font-medium">
                      {server.description}
                    </CardDescription>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {server.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center justify-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant="outline">
                      Ver Especificaciones
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Qué Servidor Cloud Debería Usar?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Encuentra la solución perfecta para tus necesidades específicas
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg text-primary">
                      {useCase.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {useCase.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-primary uppercase tracking-wide">
                          Casos de Uso Ideales:
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {useCase.applications.map((app, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 mt-20">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para Comenzar?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contáctanos para obtener una solución personalizada que se adapte 
                perfectamente a las necesidades de tu proyecto.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Solicitar Cotización
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default CloudServersPage;
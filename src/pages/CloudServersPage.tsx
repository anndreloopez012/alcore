import PageTransition from "@/components/PageTransition";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Server, Cpu, Zap, Shield, Globe, Database, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const CloudServersPage = () => {
  const [selectedServer, setSelectedServer] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const serverTypes = [
    {
      type: "Shared vCPU Intel®",
      series: "CX",
      description: "La mejor relación calidad-precio",
      features: ["vCPU compartida", "Procesadores Intel", "Ideal para desarrollo y pruebas", "Recursos escalables"],
      icon: <Cpu className="h-8 w-8" />,
      color: "bg-blue-500",
      fullDescription: "La mejor relación calidad-precio con procesadores Intel® Xeon® Gold",
      locations: ["Alemania", "Finlandia"]
    },
    {
      type: "Shared vCPU AMD",
      series: "CPX", 
      description: "VPS basado en AMD Epyc™",
      features: ["Procesadores AMD Epyc™", "Rendimiento mejorado", "vCPU compartida", "Rentable"],
      icon: <Zap className="h-8 w-8" />,
      color: "bg-red-500",
      fullDescription: "VPS con procesadores AMD EPYC™ serie 7002",
      locations: ["Alemania", "Finlandia", "Singapur", "EE.UU."]
    },
    {
      type: "Shared vCPU Ampere®",
      series: "CAX",
      description: "Arquitectura Arm64 eficiente",
      features: ["Arquitectura Arm64", "Eficiencia energética", "Tecnología moderna", "Rendimiento óptimo por vatio"],
      icon: <Globe className="h-8 w-8" />,
      color: "bg-green-500",
      fullDescription: "Arquitectura Arm64 eficiente con procesadores Ampere® Altra®",
      locations: ["Alemania", "Finlandia"]
    },
    {
      type: "Dedicated vCPU",
      series: "CCX",
      description: "Lo mejor para cargas de trabajo de producción",
      features: ["Núcleos vCPU dedicados", "Baja latencia", "Alto rendimiento", "Listo para producción"],
      icon: <Server className="h-8 w-8" />,
      color: "bg-purple-500",
      fullDescription: "Optimiza tu carga de trabajo con procesadores AMD Milan EPYC™ 7003 y AMD Genoa EPYC™ 9654",
      locations: ["Alemania", "Finlandia", "Singapur", "EE.UU."]
    }
  ];

  const serverConfigurations = {
    "CX": [
      { name: "CX22", vcpu: 2, ram: "4 GB", nvme: "40 GB", traffic: "20 TB" },
      { name: "CX32", vcpu: 4, ram: "8 GB", nvme: "80 GB", traffic: "20 TB" },
      { name: "CX42", vcpu: 8, ram: "16 GB", nvme: "160 GB", traffic: "20 TB" },
      { name: "CX52", vcpu: 16, ram: "32 GB", nvme: "320 GB", traffic: "20 TB" }
    ],
    "CPX": [
      { name: "CPX11", vcpu: 2, ram: "2 GB", nvme: "40 GB", traffic: "20 TB" },
      { name: "CPX21", vcpu: 3, ram: "4 GB", nvme: "80 GB", traffic: "20 TB" },
      { name: "CPX31", vcpu: 4, ram: "8 GB", nvme: "160 GB", traffic: "20 TB" },
      { name: "CPX41", vcpu: 8, ram: "16 GB", nvme: "240 GB", traffic: "20 TB" },
      { name: "CPX51", vcpu: 16, ram: "32 GB", nvme: "360 GB", traffic: "20 TB" }
    ],
    "CAX": [
      { name: "CAX11", vcpu: 2, ram: "4 GB", nvme: "40 GB", traffic: "20 TB" },
      { name: "CAX21", vcpu: 4, ram: "8 GB", nvme: "80 GB", traffic: "20 TB" },
      { name: "CAX31", vcpu: 8, ram: "16 GB", nvme: "160 GB", traffic: "20 TB" },
      { name: "CAX41", vcpu: 16, ram: "32 GB", nvme: "320 GB", traffic: "20 TB" }
    ],
    "CCX": [
      { name: "CCX13", vcpu: 2, ram: "8 GB", nvme: "80 GB", traffic: "20 TB" },
      { name: "CCX23", vcpu: 4, ram: "16 GB", nvme: "160 GB", traffic: "20 TB" },
      { name: "CCX33", vcpu: 8, ram: "32 GB", nvme: "240 GB", traffic: "30 TB" },
      { name: "CCX43", vcpu: 16, ram: "64 GB", nvme: "360 GB", traffic: "40 TB" },
      { name: "CCX53", vcpu: 32, ram: "128 GB", nvme: "600 GB", traffic: "50 TB" },
      { name: "CCX63", vcpu: 48, ram: "192 GB", nvme: "960 GB", traffic: "60 TB" }
    ]
  };

  const handleShowSpecifications = (series: string) => {
    setSelectedServer(series);
    setIsDialogOpen(true);
  };

  const getSelectedServerType = () => {
    return serverTypes.find(server => server.series === selectedServer);
  };

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
                    <Button 
                      className="w-full mt-6" 
                      variant="outline"
                      onClick={() => handleShowSpecifications(server.series)}
                    >
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

      {/* Specifications Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-3">
              {getSelectedServerType() && (
                <>
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${getSelectedServerType()?.color} rounded-xl text-white`}>
                    {getSelectedServerType()?.icon}
                  </div>
                  {getSelectedServerType()?.type} - Serie {selectedServer}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          {selectedServer && getSelectedServerType() && (
            <div className="space-y-6">
              {/* Server Type Description */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">{getSelectedServerType()?.description}</h3>
                <p className="text-muted-foreground mb-4">{getSelectedServerType()?.fullDescription}</p>
                <div className="space-y-2">
                  <h4 className="font-medium">Características principales:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {getSelectedServerType()?.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Ubicaciones disponibles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {getSelectedServerType()?.locations.map((location, idx) => (
                        <Badge key={idx} variant="secondary">{location}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Configurations Table */}
              <div>
                <h3 className="text-xl font-bold mb-4">Configuraciones Disponibles</h3>
                <div className="grid gap-4">
                  {serverConfigurations[selectedServer as keyof typeof serverConfigurations]?.map((config, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="font-semibold text-primary text-lg">
                          {config.name}
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">vCPU</div>
                          <div className="font-medium">{config.vcpu}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">RAM</div>
                          <div className="font-medium">{config.ram}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">NVMe SSD</div>
                          <div className="font-medium">{config.nvme}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">Tráfico Incl.</div>
                          <div className="font-medium">{config.traffic}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Características Adicionales</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    IPv4 e IPv6 incluidas
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Almacenamiento NVMe SSD de alta velocidad
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Conexión de red redundante de 10 Gbit
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Facturación por horas
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    API REST y herramientas CLI
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Snapshots y backups automáticos
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
};

export default CloudServersPage;
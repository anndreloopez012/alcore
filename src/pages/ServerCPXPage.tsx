import PageTransition from "@/components/PageTransition";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Zap, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ServerCPXPage = () => {
  const navigate = useNavigate();

  const serverInfo = {
    type: "Shared vCPU AMD",
    series: "CPX",
    description: "VPS basado en AMD Epyc™",
    fullDescription: "VPS con procesadores AMD EPYC™ serie 7002",
    features: ["Procesadores AMD Epyc™", "Rendimiento mejorado", "vCPU compartida", "Rentable"],
    locations: ["Alemania", "Finlandia", "Singapur", "EE.UU."],
    icon: <Zap className="h-8 w-8" />,
    color: "bg-red-500"
  };

  const configurations = [
    { name: "CPX11", vcpu: 2, ram: "2 GB", nvme: "40 GB", traffic: "20 TB" },
    { name: "CPX21", vcpu: 3, ram: "4 GB", nvme: "80 GB", traffic: "20 TB" },
    { name: "CPX31", vcpu: 4, ram: "8 GB", nvme: "160 GB", traffic: "20 TB" },
    { name: "CPX41", vcpu: 8, ram: "16 GB", nvme: "240 GB", traffic: "20 TB" },
    { name: "CPX51", vcpu: 16, ram: "32 GB", nvme: "360 GB", traffic: "20 TB" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        <Navigation />
        
        <main className="pt-32 pb-20">
          {/* Header */}
          <section className="container mx-auto px-4 mb-16">
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/servidores-cloud')}
                className="mb-6 p-0 h-auto text-muted-foreground hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a Servidores Cloud
              </Button>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${serverInfo.color} rounded-xl text-white`}>
                  {serverInfo.icon}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {serverInfo.type}
                  </h1>
                  <Badge variant="secondary" className="mt-2">Serie {serverInfo.series}</Badge>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground mb-6">
                {serverInfo.fullDescription}
              </p>
            </div>
          </section>

          {/* Server Details */}
          <section className="container mx-auto px-4 mb-16">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Características Principales</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold mb-3">Especificaciones:</h3>
                      <ul className="space-y-2">
                        {serverInfo.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Ubicaciones Disponibles:</h3>
                      <div className="flex flex-wrap gap-2">
                        {serverInfo.locations.map((location, idx) => (
                          <Badge key={idx} variant="outline">{location}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Configurations */}
          <section className="container mx-auto px-4 mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Configuraciones Disponibles
              </h2>
              
              <div className="grid gap-6">
                {configurations.map((config, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                      <div className="col-span-2 md:col-span-1">
                        <div className="font-bold text-xl text-primary">
                          {config.name}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">vCPU</div>
                        <div className="font-semibold text-lg">{config.vcpu}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">RAM</div>
                        <div className="font-semibold text-lg">{config.ram}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">NVMe SSD</div>
                        <div className="font-semibold text-lg">{config.nvme}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-1">Tráfico Incl.</div>
                        <div className="font-semibold text-lg">{config.traffic}</div>
                      </div>
                      <div className="text-center">
                        <Button className="w-full">
                          Solicitar Cotización
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Additional Features */}
          <section className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Características Adicionales</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default ServerCPXPage;
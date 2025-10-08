import { Workflow, Zap, CheckCircle, Clock, MessageSquare, Mail, Database, Cloud, ArrowRight, Bot, Repeat, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { openWhatsAppQuote } from "@/utils/whatsapp";

const AutomationPage = () => {
  const workProcess = [
    {
      icon: MessageSquare,
      title: "1. Consulta Inicial",
      description: "Conversación para entender los procesos que desea automatizar",
      details: [
        "Identificación de tareas repetitivas",
        "Análisis de tiempo invertido actualmente",
        "Detección de oportunidades de mejora",
        "Evaluación de herramientas actuales"
      ],
      duration: "1 sesión"
    },
    {
      icon: Workflow,
      title: "2. Diseño del Workflow",
      description: "Creamos un mapa visual de la automatización propuesta",
      details: [
        "Diagrama de flujo del proceso",
        "Definición de puntos de integración",
        "Validación de lógica de negocio",
        "Aprobación del cliente"
      ],
      duration: "2-3 días"
    },
    {
      icon: Zap,
      title: "3. Implementación",
      description: "Configuración y desarrollo de la automatización en n8n",
      details: [
        "Configuración de workflows",
        "Integración con aplicaciones",
        "Pruebas de funcionamiento",
        "Ajustes y optimización"
      ],
      duration: "3-7 días"
    },
    {
      icon: Clock,
      title: "4. Capacitación y Entrega",
      description: "Le enseñamos a usar y monitorear sus automatizaciones",
      details: [
        "Tutorial de uso del sistema",
        "Documentación completa",
        "Acceso a dashboard de n8n",
        "Soporte post-implementación"
      ],
      duration: "1 sesión"
    }
  ];

  const automationPossibilities = [
    {
      icon: Mail,
      title: "Email Marketing",
      examples: [
        "Envío automático de emails de bienvenida",
        "Seguimiento de leads desde formularios",
        "Notificaciones de nuevos clientes",
        "Respuestas automáticas personalizadas"
      ]
    },
    {
      icon: Database,
      title: "Gestión de Datos",
      examples: [
        "Sincronización entre CRM y hojas de cálculo",
        "Backup automático de información",
        "Limpieza y actualización de bases de datos",
        "Migración de datos entre plataformas"
      ]
    },
    {
      icon: Cloud,
      title: "Integración de Apps",
      examples: [
        "Conectar WhatsApp con CRM",
        "Slack con herramientas de proyecto",
        "Google Drive con sistemas de gestión",
        "Redes sociales con calendarios"
      ]
    },
    {
      icon: Bot,
      title: "Automatización con IA",
      examples: [
        "Clasificación automática de tickets",
        "Análisis de sentimiento en mensajes",
        "Generación de respuestas inteligentes",
        "Resúmenes automáticos de reuniones"
      ]
    },
    {
      icon: Repeat,
      title: "Procesos Recurrentes",
      examples: [
        "Generación de reportes periódicos",
        "Facturación automática mensual",
        "Recordatorios de tareas pendientes",
        "Actualizaciones de inventario"
      ]
    },
    {
      icon: Globe,
      title: "Webhooks y APIs",
      examples: [
        "Notificaciones en tiempo real",
        "Sincronización de e-commerce",
        "Integración con plataformas custom",
        "Actualización automática de sistemas"
      ]
    }
  ];

  const benefits = [
    "Ahorre hasta 40 horas mensuales en tareas repetitivas",
    "Reduzca errores humanos en procesos críticos",
    "Mejore la velocidad de respuesta a clientes",
    "Escale operaciones sin contratar más personal",
    "Integre todas sus herramientas en un solo flujo",
    "Obtenga reportes y métricas automáticas"
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Workflow className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Automatización Empresarial</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Automatizaciones con n8n
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Libere el potencial de su equipo automatizando tareas repetitivas y conectando todas sus herramientas de trabajo
            </p>
            <Button 
              size="lg" 
              className="shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openWhatsAppQuote("automatización empresarial con n8n")}
            >
              Quiero Automatizar mi Empresa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* What is n8n */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">
                ¿Qué es n8n y cómo puede transformar su empresa?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                n8n es una poderosa plataforma de automatización que permite conectar cientos de aplicaciones y servicios sin necesidad de programar. 
                Como expertos en n8n, diseñamos workflows personalizados que automatizan sus procesos empresariales, ahorrando tiempo y reduciendo errores.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">350+</div>
                  <div className="text-sm text-muted-foreground">Aplicaciones disponibles</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Personalizable</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Funcionamiento continuo</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Possibilities */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Posibilidades de Automatización
            </h2>
            <p className="text-xl text-muted-foreground">
              Algunos ejemplos de lo que podemos automatizar para su empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationPossibilities.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-muted-foreground">
              Desde la idea hasta la automatización funcionando
            </p>
          </div>

          <div className="grid gap-6">
            {workProcess.map((step, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      </div>
                      <CardDescription className="text-base">
                        {step.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-3 ml-16">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beneficios de Automatizar con Nosotros
            </h2>
            <p className="text-xl text-muted-foreground">
              Resultados medibles que impactan su negocio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <p className="font-medium text-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para automatizar su empresa?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Cuéntenos qué procesos consume más tiempo en su día a día y le mostraremos cómo automatizarlos
          </p>
          <Button 
            size="lg" 
            className="shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => openWhatsAppQuote("automatización - quiero información sobre cómo automatizar procesos en mi empresa")}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Solicitar Información por WhatsApp
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Respuesta en menos de 24 horas
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AutomationPage;
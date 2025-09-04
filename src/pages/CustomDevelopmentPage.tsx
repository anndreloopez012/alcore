import { CheckCircle, Users, Lightbulb, Code, TestTube, Rocket, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CustomDevelopmentPage = () => {
  const processSteps = [
    {
      icon: Users,
      title: "1. Consultoría y Análisis",
      description: "Reunión inicial para entender profundamente las necesidades de su empresa",
      details: [
        "Análisis de procesos actuales",
        "Identificación de puntos de mejora",
        "Definición de objetivos del proyecto",
        "Estimación de tiempo y recursos"
      ],
      duration: "1-2 semanas"
    },
    {
      icon: Lightbulb,
      title: "2. Planificación y Diseño",
      description: "Creamos un plan detallado y diseños que se adapten perfectamente a su negocio",
      details: [
        "Arquitectura del sistema",
        "Diseño de interfaz de usuario",
        "Definición de funcionalidades",
        "Cronograma de desarrollo"
      ],
      duration: "1-3 semanas"
    },
    {
      icon: Code,
      title: "3. Desarrollo",
      description: "Implementación del software utilizando las mejores tecnologías y prácticas",
      details: [
        "Desarrollo modular y escalable",
        "Revisiones periódicas con el cliente",
        "Documentación completa del código",
        "Control de versiones profesional"
      ],
      duration: "4-12 semanas"
    },
    {
      icon: TestTube,
      title: "4. Pruebas y Validación",
      description: "Rigurosas pruebas para garantizar calidad y funcionamiento óptimo",
      details: [
        "Pruebas funcionales completas",
        "Pruebas de rendimiento",
        "Validación con usuarios finales",
        "Corrección de errores detectados"
      ],
      duration: "1-2 semanas"
    },
    {
      icon: Rocket,
      title: "5. Implementación",
      description: "Puesta en marcha del sistema con soporte completo durante la transición",
      details: [
        "Despliegue en producción",
        "Migración de datos existentes",
        "Capacitación del personal",
        "Documentación de usuario"
      ],
      duration: "1-2 semanas"
    },
    {
      icon: Clock,
      title: "6. Soporte y Mantenimiento",
      description: "Acompañamiento continuo para garantizar el éxito de su inversión",
      details: [
        "Soporte técnico 24/7",
        "Actualizaciones regulares",
        "Mantenimiento preventivo",
        "Mejoras y nuevas funcionalidades"
      ],
      duration: "Permanente"
    }
  ];

  const benefits = [
    "Solución 100% personalizada para su empresa",
    "Escalabilidad garantizada para crecimiento futuro",
    "Integración con sistemas existentes",
    "Reducción significativa de costos operativos",
    "Mejora en la productividad del equipo",
    "Ventaja competitiva en el mercado"
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Desarrollo a la Medida
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transformamos las necesidades específicas de su empresa en soluciones de software innovadoras y eficientes
            </p>
            <Link to="/contacto">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                Comenzar mi Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Proceso de Desarrollo
            </h2>
            <p className="text-xl text-muted-foreground">
              Un enfoque metódico que garantiza el éxito de su proyecto
            </p>
          </div>

          <div className="grid gap-8">
            {processSteps.map((step, index) => (
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

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beneficios del Desarrollo Personalizado
            </h2>
            <p className="text-xl text-muted-foreground">
              Invierta en una solución que crezca con su empresa
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para transformar su empresa?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Hablemos sobre cómo podemos crear la solución perfecta para sus necesidades específicas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
                Solicitar Consulta Gratuita
              </Button>
            </Link>
            <Link to="/productos">
              <Button variant="outline" size="lg">
                Ver Productos Disponibles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CustomDevelopmentPage;
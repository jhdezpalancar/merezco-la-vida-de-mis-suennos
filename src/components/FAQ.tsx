import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Necesito experiencia previa en manifestación o ley de atracción?",
      answer:
        "¡Para nada! Este libro está diseñado para cualquier persona, sin importar si nunca has practicado manifestación antes. Todo está explicado paso a paso, de forma simple y clara.",
    },
    {
      question: "¿Cuánto tiempo me tomará ver resultados?",
      answer:
        "El ritual está diseñado para 21 días, que es el tiempo que se necesita para crear un nuevo hábito. Muchas personas reportan cambios sutiles en la primera semana, y transformaciones significativas alrededor del día 15-21. Por supuesto, cada persona es única.",
    },
    {
      question: "¿Cómo recibiré el libro y los bonos?",
      answer:
        "Inmediatamente después de completar tu compra, recibirás un email con los links de descarga directa. Podrás acceder al libro y todos los bonos en formato PDF, listo para leer en cualquier dispositivo.",
    },
    {
      question: "¿Funciona esto para cualquier tipo de objetivo?",
      answer:
        "Sí. El Ritual de Manifestación funciona para abundancia económica, amor, salud, paz interior, relaciones, oportunidades profesionales y cualquier área de tu vida que desees mejorar. Los principios son universales.",
    },
    {
      question: "¿Qué pasa si no funciona para mí?",
      answer:
        "Tienes 7 días de garantía completa. Si por cualquier razón sientes que el libro no es para ti, solo contáctanos y te devolvemos tu dinero sin preguntas. Pero estoy segura de que si sigues el ritual con apertura y constancia, verás cambios reales.",
    },
    {
      question: "¿Es esto religioso o requiere de creencias específicas?",
      answer:
        "No está atado a ninguna religión específica. Es un método espiritual universal que respeta todas las creencias. Solo requiere una mente abierta y el deseo genuino de mejorar tu vida.",
    },
    {
      question: "¿Puedo compartir el libro con otras personas?",
      answer:
        "El libro es para tu uso personal. Si conoces a alguien que podría beneficiarse, te animo a que lo refiera a esta página para que tenga su propia copia con los bonos incluidos.",
    },
    {
      question: "¿Necesito dedicar mucho tiempo cada día?",
      answer:
        "El ritual principal toma solo 10-15 minutos al día. Por supuesto, mientras más te conectes con la práctica, más profundos serán tus resultados, pero está diseñado para personas ocupadas con vidas reales.",
    },
    {
      question: "¿Qué hace diferente a este libro de otros sobre manifestación?",
      answer:
        "A diferencia de teorías complicadas o promesas vacías, este es un método real, transmitido por generaciones y probado durante décadas. Es práctico, emocional y directo. No es solo información, es transformación.",
    },
    {
      question: "¿Hay algún costo adicional o membresía?",
      answer:
        "¡No! Solo pagas una vez los $14 USD y tienes acceso de por vida al libro y todos los bonos. Sin costos ocultos, sin membresías, sin sorpresas.",
    },
  ];

  const handleCTA = () => {
    window.open("https://go.hotmart.com/R101103337F?ap=50eb", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Respuestas honestas a tus dudas más comunes
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-card-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-gradient-hero p-8 rounded-xl shadow-lift">
            <p className="text-2xl font-bold text-primary-foreground mb-6">
              ¿Lista Para Comenzar Tu Transformación?
            </p>
            <Button size="lg" variant="cta-outline" onClick={handleCTA} className="text-lg px-8 py-6 bg-background hover:bg-primary-foreground">
              Quiero Mi Copia Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

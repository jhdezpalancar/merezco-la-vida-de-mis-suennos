import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";
import bookGlow from "@/assets/book-glow.jpg";

const Solution = () => {
  const benefits = [
    "Aprende el ritual exacto que mi abuela usó durante 50 años",
    "Descubre las afirmaciones que realmente funcionan (y por qué)",
    "Conecta con la energía del universo en solo 10 minutos al día",
    "Elimina los bloqueos mentales que te impiden manifestar",
    "Atrae abundancia, amor y oportunidades sin esfuerzo forzado",
    "Transforma tu vibración energética para alinearte con tus deseos",
    "Ejercicios prácticos día a día durante 21 días",
    "Técnicas de visualización que producen resultados reales",
  ];

  const handleCTA = () => {
    window.open("https://go.hotmart.com/R101103337F?ap=50eb", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              La Solución: "Merezco la Vida de Mis Sueños"
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un libro digital que revela el <strong>Ritual de Manifestación</strong> transmitido
              por generaciones, ahora disponible para ti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src={bookGlow}
                alt="Libro Merezco la Vida de Mis Sueños"
                className="rounded-lg shadow-lift w-full animate-float"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  ¿Por Qué Este Método Funciona?
                </h3>
                <p className="text-muted-foreground mb-4">
                  A diferencia de otros métodos genéricos, este ritual combina:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Conexión Energética:</strong> Aprende a sintonizar con la frecuencia
                      del universo
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Acción Guiada:</strong> No solo visualizas, actúas estratégicamente
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>
                      <strong>Transformación Interna:</strong> Eliminas creencias limitantes desde
                      la raíz
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-accent/20 rounded-lg border-l-4 border-accent">
                <p className="text-foreground italic">
                  "Este no es un libro más de ley de atracción. Es el resultado de 50 años de
                  experiencia real, transmitida con amor de una abuela a su nieta, y ahora
                  compartida contigo."
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Todo Lo Que Aprenderás:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-glow transition-all"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-card-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="cta" onClick={handleCTA} className="text-lg px-8 py-6">
              Sí, Quiero Acceso Inmediato
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Descarga instantánea tras la compra</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

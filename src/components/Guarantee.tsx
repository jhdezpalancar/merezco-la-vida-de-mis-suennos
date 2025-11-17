import { Shield, Heart } from "lucide-react";
import secureBadge from "@/assets/secure-badge.jpg";

const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <img
              src={secureBadge}
              alt="Garantía Segura"
              className="w-24 h-24 mx-auto mb-6"
            />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Mi Garantía Personal Para Ti
            </h2>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-lift border-2 border-primary">
            <div className="flex items-start gap-6 mb-8">
              <Shield className="w-16 h-16 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  Garantía de Satisfacción de 7 Días
                </h3>
                <p className="text-muted-foreground text-lg mb-4">
                  Sé que este método funciona porque lo he vivido. Pero también sé que cada persona
                  es única. Por eso quiero que te sientas completamente segura con tu decisión.
                </p>
                <p className="text-muted-foreground text-lg">
                  Tienes <strong className="text-primary">7 días completos</strong> para explorar
                  el libro, practicar el ritual y comenzar a ver cambios en tu vida. Si por
                  cualquier razón sientes que no es para ti, simplemente envíame un mensaje y te
                  devuelvo cada centavo.
                </p>
              </div>
            </div>

            <div className="bg-accent/20 p-6 rounded-lg border-l-4 border-accent">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-card-foreground italic text-lg">
                    "Sin preguntas incómodas. Sin complicaciones. Sin riesgos. Solo una promesa de
                    corazón a corazón: estoy aquí para ayudarte a crear la vida que mereces."
                  </p>
                  <p className="text-muted-foreground mt-4 font-medium">
                    — Con amor, la autora
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Procesado de forma segura mediante Hotmart, líder mundial en productos digitales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;

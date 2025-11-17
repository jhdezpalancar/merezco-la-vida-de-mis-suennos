import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Zap } from "lucide-react";

const Offer = () => {
  const handleCTA = () => {
    window.open("https://go.hotmart.com/R101103337F?ap=50eb", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Tu Inversión en Una Vida Mejor
            </h2>
            <p className="text-xl text-muted-foreground">
              Todo lo que necesitas para transformar tu realidad
            </p>
          </div>

          <div className="bg-gradient-hero p-8 md:p-12 rounded-2xl shadow-lift text-primary-foreground mb-8">
            <div className="space-y-6 mb-8">
              <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Libro Digital "Merezco la Vida de Mis Sueños"</span>
                </div>
                <span className="font-bold text-xl">$27</span>
              </div>

              <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Bono #1: Secretos de los Sonidos Mágicos</span>
                </div>
                <span className="font-bold text-xl">$19</span>
              </div>

              <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Bono #2: Mi Diario de Manifestación</span>
                </div>
                <span className="font-bold text-xl">$15</span>
              </div>

              <div className="flex items-center justify-between border-b border-primary-foreground/20 pb-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="text-lg">Bono #3: Números Mágicos</span>
                </div>
                <span className="font-bold text-xl">$12</span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-2xl font-bold">VALOR TOTAL:</span>
                <span className="text-3xl font-bold line-through">$73</span>
              </div>
            </div>

            <div className="bg-primary-foreground text-primary p-8 rounded-xl text-center">
              <p className="text-lg mb-2">TU PRECIO ESPECIAL HOY:</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <p className="text-6xl font-bold">$14</p>
                <span className="text-2xl">USD</span>
              </div>
              <p className="text-sm mb-6">Acceso inmediato + Todos los bonos incluidos</p>

              <Button
                size="lg"
                variant="cta"
                onClick={handleCTA}
                className="w-full text-xl py-8 mb-4"
              >
                <Zap className="w-6 h-6 mr-2" />
                Comprar Ahora por Solo $14
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>Oferta por tiempo limitado</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-card rounded-lg border border-border">
              <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-card-foreground">Pago Seguro</p>
              <p className="text-sm text-muted-foreground">Protegido por Hotmart</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-card-foreground">Acceso Inmediato</p>
              <p className="text-sm text-muted-foreground">Descarga al instante</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-card-foreground">Garantía 7 Días</p>
              <p className="text-sm text-muted-foreground">100% reembolso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

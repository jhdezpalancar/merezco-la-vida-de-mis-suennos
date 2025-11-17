import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Heart } from "lucide-react";

const FinalCTA = () => {
  const handleCTA = () => {
    window.open("https://go.hotmart.com/R101103337F?ap=50eb", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Hoy Puede Ser El Día Que Cambie Todo
          </h2>

          <div className="space-y-6 mb-12 text-lg text-muted-foreground">
            <p>
              Imagina despertarte dentro de 21 días sintiendo que finalmente estás en control de tu
              vida. Que tus pensamientos crean tu realidad. Que mereces y recibes abundancia.
            </p>

            <p>
              Imagina la paz de saber que tienes el poder de manifestar lo que deseas. La confianza
              de conectar con el universo. La alegría de ver tus sueños materializarse.
            </p>

            <div className="bg-card p-8 rounded-xl shadow-md border-l-4 border-accent inline-block">
              <div className="flex items-center gap-4">
                <Heart className="w-12 h-12 text-accent flex-shrink-0" />
                <p className="text-card-foreground italic text-xl text-left">
                  "Todo esto te está esperando. Solo necesitas dar el primer paso."
                </p>
              </div>
            </div>

            <p className="font-bold text-foreground text-2xl">
              No dejes que el miedo o la duda te roben la vida que mereces.
            </p>
          </div>

          <div className="bg-gradient-hero p-10 rounded-2xl shadow-lift mb-8">
            <p className="text-3xl font-bold text-primary-foreground mb-2">Solo $14 USD</p>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Libro + 3 Bonos Exclusivos + Garantía de 7 Días
            </p>
            <Button size="lg" variant="cta" onClick={handleCTA} className="text-xl px-12 py-8 bg-background text-primary hover:bg-primary-foreground">
              <Zap className="w-6 h-6 mr-2" />
              Sí, Merezco la Vida de Mis Sueños
            </Button>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Acceso inmediato tras tu compra
            </p>
            <p className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Sin riesgos con garantía de 7 días
            </p>
            <p className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Comienza tu transformación hoy mismo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

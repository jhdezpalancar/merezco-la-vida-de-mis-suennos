import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Lock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-manifestation.jpg";

const Hero = () => {
  const handleCTA = () => {
    window.open("https://go.hotmart.com/R101103337F?ap=50eb", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-accent text-accent-foreground border-0 mb-4 animate-float">
            <Sparkles className="w-4 h-4 mr-2" />
            El Secreto de Generaciones
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Descubre el{" "}
            <span className="text-accent animate-glow-pulse">"Ritual de Manifestación"</span>{" "}
            que transforma tus pensamientos en realidad en solo 21 días
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Sin necesidad de experiencia previa, cursos costosos ni años de práctica. Solo un
            método simple y probado que ha cambiado miles de vidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" variant="cta" onClick={handleCTA} className="text-lg px-8 py-6">
              <Zap className="w-5 h-5 mr-2" />
              Quiero Transformar Mi Vida Ahora
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-8 text-white/80">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Pago 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Acceso Inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Garantía de 7 Días</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

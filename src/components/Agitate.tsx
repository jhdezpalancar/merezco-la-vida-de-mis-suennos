import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const Agitate = () => {
  const handleCTA = () => {
    window.open("https://go.hotmart.com/R101103337F?ap=50eb", "_blank");
  };

  return (
    <section className="py-20 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              El Verdadero Costo de No Actuar
            </h2>
          </div>

          <div className="space-y-6 mb-12">
            <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-destructive">
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                Cada día que pasa es una oportunidad perdida
              </h3>
              <p className="text-muted-foreground">
                Mientras sigues esperando el momento perfecto, la vida que mereces se aleja más y
                más. El tiempo no regresa, y cada día sin esta sabiduría es un día más lejos de tus
                sueños.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-destructive">
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                La frustración se convierte en resignación
              </h3>
              <p className="text-muted-foreground">
                Con el tiempo, dejas de creer que las cosas pueden cambiar. Te acostumbras a una
                vida que no te satisface, convenciéndote de que "así son las cosas". Pero sabes en
                tu corazón que mereces mucho más.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border-l-4 border-destructive">
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                Transmites estos bloqueos a quienes amas
              </h3>
              <p className="text-muted-foreground">
                Sin darte cuenta, tus miedos y limitaciones se vuelven parte de tu familia. ¿No
                prefieres ser quien rompe el ciclo y enseña el camino hacia la abundancia?
              </p>
            </div>
          </div>

          <div className="bg-gradient-hero p-8 rounded-xl shadow-lift text-center">
            <p className="text-2xl font-bold text-primary-foreground mb-6">
              ¡Pero Hay Una Buena Noticia!
            </p>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Hoy puedes decidir que todo cambie. Que tu historia sea diferente. Que finalmente
              vivas la vida que siempre has merecido.
            </p>
            <Button size="lg" variant="cta-outline" onClick={handleCTA} className="bg-background hover:bg-primary-foreground">
              Sí, Quiero Cambiar Mi Historia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agitate;

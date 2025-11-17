import { AlertCircle } from "lucide-react";

const Problem = () => {
  const problems = [
    "Sientes que siempre estás luchando sin ver resultados reales",
    "Te esfuerzas al máximo pero la abundancia parece esquivarte",
    "Has probado afirmaciones y visualizaciones que simplemente no funcionan",
    "Te frustra ver cómo otros logran sus sueños mientras tú te quedas atrás",
    "Sientes que hay un bloqueo invisible que te impide alcanzar tu mejor vida",
    "Dudas de ti misma y de tu capacidad para crear la vida que mereces",
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              ¿Te Sientes Así?
            </h2>
            <p className="text-xl text-muted-foreground">
              Sé exactamente cómo te sientes. Yo también estuve ahí...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-glow transition-all"
              >
                <p className="text-card-foreground flex items-start gap-3">
                  <span className="text-destructive text-xl">✗</span>
                  <span>{problem}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-card rounded-lg border-l-4 border-destructive shadow-lg">
            <p className="text-lg text-card-foreground italic">
              "Durante años, sentí que algo me faltaba. Trabajaba duro, me esforzaba, pero la vida
              que soñaba siempre parecía estar fuera de mi alcance. Hasta que descubrí el secreto
              que mi abuela había guardado por generaciones..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

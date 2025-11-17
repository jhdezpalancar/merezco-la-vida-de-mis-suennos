import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 👉 Importamos las imágenes correctamente desde /src/assets
import Bono1 from "@/assets/bono1.jpg";
import Bono2 from "@/assets/bono2.jpg";
import Bono3 from "@/assets/bono3.jpg";

const Bonuses = () => {
  const bonuses = [
    {
      image: Bono1,
      title: "Los Secretos de los Sonidos Mágicos",
      value: "$19",
      description:
        "Descubre las frecuencias sonoras y mantras que amplifican tu energía de manifestación. Audio guías exclusivas para potenciar tu ritual diario.",
    },
    {
      image: Bono2,
      title: "Mi Diario de Manifestación",
      value: "$15",
      description:
        "Un diario digital especialmente diseñado para rastrear tus progresos, registrar tus manifestaciones y mantener tu energía enfocada en tus objetivos.",
    },
    {
      image: Bono3,
      title: "Números Mágicos para una Vida Abundante",
      value: "$12",
      description:
        "La numerología aplicada a la manifestación. Descubre tus números personales de poder y cómo usarlos para atraer abundancia específica.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Título */}
          <div className="text-center mb-12">
            <Badge className="bg-accent text-accent-foreground border-0 mb-4 text-lg px-4 py-2">
              ¡SOLO HOY!
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Recibe Estos 3 Bonos Exclusivos
            </h2>

            <p className="text-xl text-muted-foreground">
              Para asegurar tu éxito en el camino de la manifestación
            </p>
          </div>

          {/* BONOS */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 hover:border-primary hover:shadow-lift transition-all"
              >
                <CardHeader className="pb-0">
                  {/* Imagen del bono */}
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-64 object-cover rounded-t-xl shadow-md"
                  />

                  {/* Valor */}
                  <div className="mt-3 text-center">
                    <Badge variant="secondary" className="text-sm">
                      Valor: {bonus.value}
                    </Badge>
                  </div>

                  {/* Título */}
                  <CardTitle className="text-center mt-2">
                    {bonus.title}
                  </CardTitle>
                </CardHeader>

                {/* Descripción */}
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {bonus.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bloque inferior */}
          <div className="bg-card p-8 rounded-xl shadow-lift border-2 border-accent">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                VALOR TOTAL DE LOS BONOS:
              </p>

              <p className="text-4xl font-bold text-foreground mb-4 line-through decoration-destructive">
                $46
              </p>

              <p className="text-2xl text-accent font-bold mb-4">
                ¡INCLUIDOS GRATIS HOY!
              </p>

              <p className="text-muted-foreground">
                Estos bonos complementan perfectamente el Ritual de Manifestación
                y aceleran tus resultados. Solo disponibles con tu compra hoy.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bonuses;

import { ArtworkFullWidth } from "@/components/ArtworkFullWidth";
import { ArtworkSideBySide } from "@/components/ArtworkSideBySide";
import { ArtworkTwoColumn } from "@/components/ArtworkTwoColumn";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl mb-4">
            <span className="text-highlight">Valentina Díaz</span>
          </h1>
          <p className="text-lg md:text-xl">
            <span className="text-highlight text-muted-foreground">
              Artista Contemporánea
            </span>
          </p>
        </div>
      </header>

      {/* Artwork 1 - Full Width */}
      <ArtworkFullWidth
        image={artwork1}
        title="Flujo Abstracto"
        description="Una exploración de formas orgánicas y color, esta pieza captura el movimiento y la energía del océano a través de capas superpuestas de pintura acrílica."
        year="2024"
      />

      {/* Artwork 2 - Side by Side */}
      <ArtworkSideBySide
        image={artwork2}
        title="Forma Elegante"
        description="Escultura minimalista que juega con la luz y la sombra. Inspirada en las formas naturales, esta obra busca la simplicidad perfecta en el espacio tridimensional."
        year="2023"
        imageOnLeft={true}
      />

      {/* Artworks 3 & 4 - Two Columns */}
      <ArtworkTwoColumn
        images={[artwork3, artwork4]}
        titles={["Gradiente Digital", "Paisaje Urbano"]}
        descriptions={[
          "Arte digital que combina técnicas tradicionales con tecnología moderna. Los gradientes fluidos crean una sensación de movimiento perpetuo.",
          "Una reinterpretación fotográfica de la vida urbana, donde los colores saturados y la composición dinámica capturan la energía de la ciudad.",
        ]}
        years={["2024", "2023"]}
      />

      {/* Artwork 5 - Full Width */}
      <ArtworkFullWidth
        image={artwork5}
        title="Textura Dorada"
        description="Pintura texturizada con pan de oro que explora la interacción entre lo orgánico y lo precioso. Las capas de pigmento crean profundidad y complejidad visual."
        year="2024"
      />

      {/* Footer */}
      <footer className="w-full py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>
            <span className="text-highlight">
              © 2024 Valentina Díaz. Todos los derechos reservados.
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

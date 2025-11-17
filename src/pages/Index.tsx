import { ArtworkFullWidth } from "@/components/ArtworkFullWidth";
import { ArtworkSideBySide } from "@/components/ArtworkSideBySide";
import { ArtworkTwoColumn } from "@/components/ArtworkTwoColumn";
import { VideoFullWidth } from "@/components/VideoFullWidth";
import { YouTubeFullWidth } from "@/components/YouTubeFullWidth";
import { CVSection } from "@/components/CVSection";
import { Youtube, Video, Instagram } from "lucide-react";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import artwork5 from "@/assets/artwork-5.jpg";
const Index = () => {
  return <div className="min-h-screen pl-[50px]">
      {/* Fixed Left Sidebar */}
      <div className="fixed left-0 top-0 w-[50px] h-[75vh] bg-black z-50 flex flex-col items-center justify-between py-8">
        <span className="text-white text-2xl font-light tracking-wider whitespace-nowrap" style={{
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)'
      }}>
          Valentina_Díaz
        </span>
        <div className="flex flex-col gap-4 items-center">
          <a href="https://vimeo.com/valentinadiaz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-70 smooth-transition">
            <Video size={21} />
          </a>
          <a href="https://www.instagram.com/valentinaaaaaahh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-70 smooth-transition">
            <Instagram size={21} />
          </a>
          <a href="https://www.youtube.com/@valentinadiaz3433" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:opacity-70 smooth-transition">
            <Youtube size={21} />
          </a>
        </div>
      </div>

      {/* CV Section */}
      <CVSection />

      {/* Ojo que mira - Two Columns */}
      <ArtworkTwoColumn images={[artwork3, artwork4]} titles={["Ojo mira a Ojo porque Ojo lo está mirando 2025 Performance", "Eye looks at Eye because Eye is looking at it 2025 Performance"]} descriptions={["Arte digital que combina técnicas tradicionales con tecnología moderna. Los gradientes fluidos crean una sensación de movimiento perpetuo.", "Una reinterpretación fotográfica de la vida urbana, donde los colores saturados y la composición dinámica capturan la energía de la ciudad."]} years={["2024", "2023"]} />
    
      {/* Artwork 1 - Full Width */}
      <ArtworkFullWidth image={artwork1} title="Flujo Abstracto" description="Una exploración de formas orgánicas y color, esta pieza captura el movimiento y la energía del océano a través de capas superpuestas de pintura acrílica." year="2024" />

      {/* Artwork 2 - Side by Side */}
      <ArtworkSideBySide image={artwork2} title="Forma Elegante" description="Escultura minimalista que juega con la luz y la sombra. Inspirada en las formas naturales, esta obra busca la simplicidad perfecta en el espacio tridimensional." year="2023" imageOnLeft={true} />

      {/* Artworks 3 & 4 - Two Columns */}
      <ArtworkTwoColumn images={[artwork3, artwork4]} titles={["Gradiente Digital", "Paisaje Urbano"]} descriptions={["Arte digital que combina técnicas tradicionales con tecnología moderna. Los gradientes fluidos crean una sensación de movimiento perpetuo.", "Una reinterpretación fotográfica de la vida urbana, donde los colores saturados y la composición dinámica capturan la energía de la ciudad."]} years={["2024", "2023"]} />

      {/* Artwork 5 - Full Width */}
      <ArtworkFullWidth image={artwork5} title="Textura Dorada" description="Pintura texturizada con pan de oro que explora la interacción entre lo orgánico y lo precioso. Las capas de pigmento crean profundidad y complejidad visual." year="2024" />

      {/* Artwork 6 - Full Width */}
      <ArtworkFullWidth image={artwork1} title="Flujo Abstracto" description="Una exploración de formas orgánicas y color, esta pieza captura el movimiento y la energía del océano a través de capas superpuestas de pintura acrílica." year="2024" />

    
      {/* Video Project - Vimeo */}
      <VideoFullWidth videoId="868457694" title="Proyecto Audiovisual" description="Una exploración multimedia que combina arte visual y narrativa cinematográfica, capturando momentos de transformación y movimiento." year="2024" />

      {/* Video Project - YouTube */}
      <YouTubeFullWidth videoId="xKyaZup9Q5A" title="Instalación Contemporánea" description="Una experiencia inmersiva que transforma el espacio a través de luz, sonido y movimiento, invitando al espectador a una nueva percepción del entorno." year="2023" />

      {/* Footer */}
      <footer className="w-full py-12 mt-16">
        <div className="container mx-auto px-4">
          <p>
            <span className="text-highlight">
              © 2025 Valentina Díaz. Todos los derechos reservados.
            </span>
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;

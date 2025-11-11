interface ArtworkFullWidthProps {
  image: string;
  title: string;
  description: string;
  year?: string;
}

export const ArtworkFullWidth = ({ image, title, description, year }: ArtworkFullWidthProps) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center max-w-3xl mx-auto bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-5xl mb-4 text-card-foreground">{title}</h2>
          {year && <p className="text-muted-foreground text-sm md:text-base mb-2">{year}</p>}
          <p className="text-card-foreground/80 text-base md:text-lg">{description}</p>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover hover:scale-105 smooth-transition"
          />
        </div>
      </div>
    </section>
  );
};

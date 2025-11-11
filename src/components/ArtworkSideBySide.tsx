interface ArtworkSideBySideProps {
  image: string;
  title: string;
  description: string;
  year?: string;
  imageOnLeft?: boolean;
}

export const ArtworkSideBySide = ({
  image,
  title,
  description,
  year,
  imageOnLeft = true,
}: ArtworkSideBySideProps) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
            !imageOnLeft ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className={`overflow-hidden rounded-lg ${!imageOnLeft ? "md:order-2" : ""}`}>
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover hover:scale-105 smooth-transition"
            />
          </div>
          <div className={`space-y-4 ${!imageOnLeft ? "md:order-1" : ""}`}>
            <h2 className="text-3xl md:text-4xl">
              <span className="text-highlight">{title}</span>
            </h2>
            {year && (
              <p className="text-sm md:text-base">
                <span className="text-highlight text-muted-foreground">{year}</span>
              </p>
            )}
            <p className="text-base md:text-lg leading-relaxed">
              <span className="text-highlight text-foreground/80">{description}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

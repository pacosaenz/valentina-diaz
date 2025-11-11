interface ArtworkTwoColumnProps {
  images: [string, string];
  titles: [string, string];
  descriptions: [string, string];
  years?: [string?, string?];
}

export const ArtworkTwoColumn = ({ images, titles, descriptions, years }: ArtworkTwoColumnProps) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* First Column */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[0]}
                alt={titles[0]}
                className="w-full h-auto object-cover hover:scale-105 smooth-transition"
              />
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl mb-2 text-card-foreground">{titles[0]}</h2>
              {years?.[0] && <p className="text-muted-foreground text-sm mb-3">{years[0]}</p>}
              <p className="text-card-foreground/80 text-base leading-relaxed">{descriptions[0]}</p>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-6">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[1]}
                alt={titles[1]}
                className="w-full h-auto object-cover hover:scale-105 smooth-transition"
              />
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl mb-2 text-card-foreground">{titles[1]}</h2>
              {years?.[1] && <p className="text-muted-foreground text-sm mb-3">{years[1]}</p>}
              <p className="text-card-foreground/80 text-base leading-relaxed">{descriptions[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

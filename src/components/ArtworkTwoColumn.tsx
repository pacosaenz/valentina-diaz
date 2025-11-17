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
            <div className="overflow-hidden">
              <img
                src={images[0]}
                alt={titles[0]}
                className="w-full h-auto object-cover hover:scale-105 smooth-transition"
              />
            </div>
            <div>
              <h2 className="text-2xl mb-2 font-bold">
                <span className="text-highlight">{titles[0]}</span>
              </h2>
              {years?.[0] && (
                <p className="text-sm mb-3">
                  <span className="text-highlight text-muted-foreground font-bold">{years[0]}</span>
                </p>
              )}
              <p className="text-base leading-relaxed">
                <span className="text-highlight text-foreground/80">{descriptions[0]}</span>
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-6">
            <div className="overflow-hidden">
              <img
                src={images[1]}
                alt={titles[1]}
                className="w-full h-auto object-cover hover:scale-105 smooth-transition"
              />
            </div>
            <div>
              <h2 className="text-2xl mb-2 font-bold">
                <span className="text-highlight">{titles[1]}</span>
              </h2>
              {years?.[1] && (
                <p className="text-sm mb-3">
                  <span className="text-highlight text-muted-foreground font-bold">{years[1]}</span>
                </p>
              )}
              <p className="text-base leading-relaxed">
                <span className="text-highlight text-foreground/80">{descriptions[1]}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

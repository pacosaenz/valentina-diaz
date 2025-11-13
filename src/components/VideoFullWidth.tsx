interface VideoFullWidthProps {
  videoId: string;
  title: string;
  description: string;
  year?: string;
}

export const VideoFullWidth = ({ videoId, title, description, year }: VideoFullWidthProps) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl md:text-5xl mb-4">
            <span className="text-highlight">{title}</span>
          </h2>
          {year && (
            <p className="text-sm md:text-base mb-2">
              <span className="text-highlight text-muted-foreground">{year}</span>
            </p>
          )}
          <p className="text-base md:text-lg">
            <span className="text-highlight text-foreground/80">{description}</span>
          </p>
        </div>
        <div className="overflow-hidden aspect-video">
          <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    </section>
  );
};

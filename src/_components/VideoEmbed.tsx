export default function VideoEmbed({ url }: { url: string }) {
  return (
    <section className="relative aspect-video w-full">
      <iframe
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-none"
      ></iframe>
    </section>
  );
}

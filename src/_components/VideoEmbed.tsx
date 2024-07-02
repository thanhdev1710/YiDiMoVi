export default async function VideoEmbed({ url }: { url: string }) {
  return (
    <section className="relative aspect-video w-full">
      <iframe
        allowFullScreen
        src={url}
        className="absolute top-0 left-0 w-full h-full border-none"
      ></iframe>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

export function MovieItem({
  slug,
  poster_url,
  name,
  className = "w-52",
  tap,
}: {
  slug: string;
  poster_url: string;
  name: string;
  className?: string;
  tap?: number | undefined;
}) {
  return (
    <div>
      <Link
        aria-label="Film"
        href={`/xemPhim/${slug}?tap=${tap ? tap : 1}`}
        className={`inline-block relative aspect-video select-none ${className}`}
      >
        <Image
          fill
          draggable={false}
          sizes="280px"
          alt={`Ảnh phim ${name}`}
          src={poster_url}
          loading="lazy"
          quality={50}
          className="absolute object-cover brightness-50 rounded-lg select-none"
        />
      </Link>
      <h3 className="text-sm font-semibold tracking-wide select-none">
        {name} {tap ? `- Tập ${tap}` : ""}
      </h3>
    </div>
  );
}

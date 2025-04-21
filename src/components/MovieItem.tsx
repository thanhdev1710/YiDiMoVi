import Image from "next/image";
import Link from "next/link";

export function MovieItem({
  slug,
  poster_url,
  name,
  className = "w-52",
}: {
  slug: string;
  poster_url: string;
  name: string;
  className?: string;
}) {
  return (
    <div>
      <Link
        aria-label="Film"
        href={`/xemPhim/${slug}`}
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
        {name}
      </h3>
    </div>
  );
}

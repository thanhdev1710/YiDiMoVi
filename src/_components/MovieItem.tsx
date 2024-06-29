import { Item } from "@/_interfaces/DataFilmBySlug";
import Image from "next/image";
import Link from "next/link";

export function MovieItem({
  item,
  className = "w-52",
}: {
  item: Item;
  className?: string;
}) {
  return (
    <div key={item.name}>
      <Link
        href={`/xemPhim/${item.slug}`}
        className={`inline-block relative aspect-video select-none ${className}`}
      >
        <Image
          fill
          draggable={false}
          sizes="200px"
          alt={`Ảnh phim ${item.name}`}
          src={item.poster_url}
          className="absolute object-cover brightness-50 rounded-lg select-none"
        />
      </Link>
      <h3 className="text-sm font-semibold tracking-wide select-none">
        {item.name}
      </h3>
    </div>
  );
}

import { RelatedMovieItemSkeleton } from "@/components/RelatedMovieItemSkeleton";

export function SkeletonHightLightBlock({ name }: { name: string }) {
  return (
    <section className="my-20 space-y-4">
      <h2 className="text-2xl font-bold">Phim {name}</h2>
      <div className="w-full grid grid-cols-3 gap-[30px]">
        <RelatedMovieItemSkeleton className="w-full" />
        <RelatedMovieItemSkeleton className="w-full" />
        <RelatedMovieItemSkeleton className="w-full" />
      </div>
    </section>
  );
}

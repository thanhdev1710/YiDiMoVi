export function RelatedMovieItemSkeleton({
  className = "w-52",
}: {
  className?: string;
}) {
  return (
    <div className="animate-pulse">
      <div
        className={`inline-block relative aspect-video bg-gray-300 rounded-lg select-none ${className}`}
      ></div>
      <h3 className="h-4 mt-2 w-3/4 bg-gray-300 rounded select-none"></h3>
    </div>
  );
}

export function SkeletonAllMovieFetchPaginationItem() {
  return (
    <article className="mb-8">
      <div className="animate-pulse space-y-4 border border-gray-200 rounded-md p-4">
        <div className="relative aspect-video bg-gray-200 rounded-md"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </article>
  );
}

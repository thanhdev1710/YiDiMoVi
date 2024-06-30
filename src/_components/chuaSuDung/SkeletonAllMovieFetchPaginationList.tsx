import { SkeletonAllMovieFetchPaginationItem } from "./SkeletonAllMovieFetchPaginationItem";

export function SkeletonAllMovieFetchPaginationList() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[48px_24px]">
      <SkeletonAllMovieFetchPaginationItem />
      <SkeletonAllMovieFetchPaginationItem />
      <SkeletonAllMovieFetchPaginationItem />
      <SkeletonAllMovieFetchPaginationItem />
      <SkeletonAllMovieFetchPaginationItem />
      <SkeletonAllMovieFetchPaginationItem />
    </div>
  );
}

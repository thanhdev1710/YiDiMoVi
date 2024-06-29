"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/_components/ui/pagination";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export function PaginationPage({
  type,
  name,
  totalPage,
}: {
  type: string | string[] | undefined;
  name: string;
  totalPage: number;
}) {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page")) < 1 ||
      Number(searchParams.get("page")) > totalPage
      ? 1
      : Number(searchParams.get("page"))
    : 1;
  useEffect(() => {
    if (currentPage <= 1) {
      const searchParam = new URLSearchParams(searchParams.toString());
      searchParam.set("page", "1");
      router.push(`${pathName}?${searchParam}`);
    }

    if (currentPage === 1) {
      const encodedURL = encodeURIComponent(
        "/block/highlight/Việt Nam?type=National&page=2"
      );
      router.prefetch(encodedURL);
    } else if (currentPage === totalPage) {
      const encodedURL = encodeURIComponent(
        `/block/highlight/Việt Nam?type=National&page=${totalPage - 1}`
      );
      router.prefetch(encodedURL);
    } else {
      router.prefetch(
        encodeURIComponent(
          `/block/highlight/Việt Nam?type=National&page=${currentPage - 1}`
        )
      );
      router.prefetch(
        encodeURIComponent(
          `/block/highlight/Việt Nam?type=National&page=${currentPage + 1}`
        )
      );
    }
  }, [currentPage, pathName, router, searchParams, totalPage]);
  return (
    <Pagination>
      <PaginationContent className="flex items-center justify-center">
        <PaginationItem>
          <PaginationPrevious
            className={`${
              currentPage === 1
                ? "pointer-events-none select-none"
                : "cursor-pointer"
            }`}
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage - 1
            }`}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={`${currentPage + 4 > totalPage ? "" : "hidden"}`}
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage - 4
            }`}
          >
            {currentPage - 4}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={`${currentPage + 3 > totalPage ? "" : "hidden"}`}
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage - 3
            }`}
          >
            {currentPage - 3}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={`${currentPage + 2 > totalPage ? "" : "hidden"}`}
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage - 2
            }`}
          >
            {currentPage - 2}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            className={`${currentPage + 1 > totalPage ? "" : "hidden"}`}
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage - 1
            }`}
          >
            {currentPage - 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`/block/highlight/${name}?type=${type}&page=${currentPage}`}
            isActive
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={`${currentPage + 1 > totalPage ? "hidden" : ""}`}
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 1
            }`}
          >
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={`${currentPage + 2 > totalPage ? "hidden" : ""}`}
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 2
            }`}
          >
            {currentPage + 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={`${currentPage + 3 > totalPage ? "hidden" : ""}`}
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 3
            }`}
          >
            {currentPage + 3}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            className={`${currentPage + 4 > totalPage ? "hidden" : ""}`}
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 4
            }`}
          >
            {currentPage + 4}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={`${
              currentPage === totalPage
                ? "pointer-events-none select-none"
                : "cursor-pointer"
            }`}
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 1
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

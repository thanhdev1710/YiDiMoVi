import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/_components/ui/pagination";

export function PaginationPage({
  currentPage,
  type,
  name,
}: {
  currentPage: number;
  type: string | string[] | undefined;
  name: string;
}) {
  return (
    <Pagination>
      <PaginationContent className="flex items-center justify-center">
        <PaginationItem>
          <PaginationPrevious
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage - 1
            }`}
          />
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
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 1
            }`}
          >
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 2
            }`}
          >
            {currentPage + 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 7
            }`}
          >
            {currentPage + 7}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 8
            }`}
          >
            {currentPage + 8}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 9
            }`}
          >
            {currentPage + 9}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`/block/highlight/${name}?type=${type}&page=${
              currentPage + 1
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

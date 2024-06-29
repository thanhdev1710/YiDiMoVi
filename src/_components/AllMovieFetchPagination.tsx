import { RootApiFilmBySearch } from "@/_interfaces/DataFilmBySearch";
import RootApiFilmBySlug from "@/_interfaces/DataFilmBySlug";
import { PaginationPage } from "./PaginationPage";

export function AllMovieFetchPagination({
  dataDefault,
  type,
  name,
}: {
  dataDefault: RootApiFilmBySlug | RootApiFilmBySearch;
  type: string | string[] | undefined;
  name: string;
}) {
  const currentPage = dataDefault.paginate.current_page;
  return (
    <section>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4"></div>

      <PaginationPage name={name} type={type} currentPage={currentPage} />
    </section>
  );
}

import { Item } from "@/_interfaces/DataFilmBySlug";
import { getMovieBySlugAndPage } from "@/_libs/service";
import removeAccents from "@/_utils/removeAccents";

export default async function RelatedMovies({
  slugList,
}: {
  slugList: string[];
}) {
  const slugFormat = slugList.map((slug) =>
    removeAccents(slug).replace(" ", "-").toLowerCase()
  );
  let data;
  const length = slugFormat.length;
  if (length === 1) {
    data = await getMovieBySlugAndPage(slugFormat[0], "1");
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Nội dung liên quan</h2>
        <div className="flex gap-6 overflow-x-scroll pb-6">
          {data.items.map((item) => (
            <p key={item.name}>{item.name}</p>
          ))}
        </div>
      </section>
    );
  } else {
    data = await Promise.all([
      getMovieBySlugAndPage(slugFormat[0], "1"),
      getMovieBySlugAndPage(slugFormat[1], "1"),
    ]);
    const allData: Item[] = [...data[0].items, ...data[1].items];
    return (
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Nội dung liên quan</h2>
        <div className="flex gap-6 overflow-x-scroll pb-6">
          <div className="flex gap-6 overflow-x-scroll pb-6">
            {allData.map((item) => (
              <p key={item.name}>{item.name}</p>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

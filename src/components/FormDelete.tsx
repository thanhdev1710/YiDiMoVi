import { deleteMovieFavorite, deleteMovieHistory } from "@/libs/actions";
import ButtonDelete from "./ButtonDelete";

export function FormDelete({
  item,
  type,
}: {
  item: {
    userId: number;
    name: string;
    slug: string;
    image: string;
  };
  type: string;
}) {
  const deleteMovie =
    type === "listFavorite"
      ? deleteMovieFavorite.bind(null, item.userId, item.name, item.slug)
      : deleteMovieHistory.bind(null, item.userId, item.name, item.slug);

  return (
    <form action={deleteMovie}>
      <ButtonDelete name={item.name} />
    </form>
  );
}

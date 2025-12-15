import { deleteMovieFavorite, deleteMovieHistory } from "@/libs/actions";
import ButtonDelete from "./ButtonDelete";

export function FormDelete({
  item,
  type,
}: {
  item: {
    userId: number;
    name: string;
    image: string;
    tap?: number | undefined;
  };
  type: string;
}) {
  const deleteMovie =
    type === "listFavorite"
      ? deleteMovieFavorite.bind(null, item.userId, item.name)
      : deleteMovieHistory.bind(null, item.userId, item.name, item.tap);

  return (
    <form action={deleteMovie}>
      <ButtonDelete name={item.name} />
    </form>
  );
}

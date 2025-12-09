export default function removeChar(
  value: string = "Việt Nam",
  removeChar: string
) {
  const typeMovie = value.startsWith(removeChar)
    ? value.replace(removeChar, "")
    : value;
  const typeMovieFormat = typeMovie
    .split(" ")
    .map((str) => str[0]!.toUpperCase() + str.slice(1))
    .join(" ");
  return typeMovieFormat;
}

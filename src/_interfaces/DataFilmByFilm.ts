export default interface RootApiFilmByFilm {
  status: string;
  movie: Movie;
}

export interface Movie {
  id: string;
  name: string;
  slug: string;
  original_name: string;
  thumb_url: string;
  poster_url: string;
  created: string;
  modified: string;
  description: string;
  total_episodes: number;
  current_episode: string;
  time: string;
  quality: string;
  language: string;
  director: string;
  casts: string;
  category: Category;
  episodes: Episode[];
}

interface Category {
  [key: string]: CategoryItem;
}

export interface CategoryItem {
  group: Group;
  list: List[];
}

export interface Group {
  id: string;
  name: string;
}

export interface List {
  id: string;
  name: string;
}

export interface Episode {
  server_name: string;
  items: Item[];
}

export interface Item {
  name: string;
  slug: string;
  embed: string;
  m3u8: string;
}

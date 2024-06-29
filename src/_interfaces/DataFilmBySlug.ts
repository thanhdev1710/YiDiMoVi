export default interface RootApiFilmBySlug {
  status: string;
  paginate: Paginate;
  cat: Cat;
  items: Item[];
}

export interface Paginate {
  current_page: number;
  total_page: number;
  total_items: number;
  items_per_page: number;
}

export interface Cat {
  name: string;
  title: string;
  slug: string;
}

export interface Item {
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
  director: any;
  casts: string;
}

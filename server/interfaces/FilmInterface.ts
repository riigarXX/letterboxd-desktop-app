export default interface FilmInterface {
  name: string;
  genre: string[];
  score: number;
  dateInsert: Date;
  image: string;
  adult: boolean;
  id: number;
  director: string | undefined;
  isWatched: boolean;
}

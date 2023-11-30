import FilmInterface from "../../../server/interfaces/FilmInterface";
import api from "./axiosInstance";

const searchFilm = async (movieName: string): Promise<Array<FilmInterface>> =>
  (await api.get("tmdb/searchFilm", { params: { movieName } })).data
    .filmsFormated;
const getTrends = async () =>
  (await api.get("tmdb/getTrends")).data.filmsFormated;

export default {
  searchFilm,
  getTrends,
};

const tmdbApi = require("../../api/tmdb");
import { getFormatResponseFilm } from "../../utils/tmdb/tmdbUtils";
export const getTrends = async (req, res) => {
    const response = await tmdbApi.get("movie/popular");
    const filmsFormated = await getFormatResponseFilm(response);
    res.json({ status: true, filmsFormated });
};
export const searchFilm = async (req, res) => {
    const { movieName } = req.query;
    const response = await tmdbApi.get("search/movie", {
        params: {
            query: movieName,
        },
    });
    const filmsFormated = await getFormatResponseFilm(response);
    res.json({ status: true, filmsFormated });
};
//# sourceMappingURL=tmdbControllers.js.map
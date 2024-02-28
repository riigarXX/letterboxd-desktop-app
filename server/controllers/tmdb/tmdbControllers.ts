const tmdbApi = require("../../api/tmdb");

import { AxiosResponse } from "axios";
import { Request, Response } from "express";
import { Film } from "../../interfaces/tmdb/MovieSearch";
import { getFormatResponseFilm } from "../../utils/tmdb/tmdbUtils";

export const getTrends = async (req: Request, res: Response) => {
	const response: AxiosResponse<Film> = await tmdbApi.get("movie/popular");
	const filmsFormated = await getFormatResponseFilm(response);
	res.json({ status: true, filmsFormated });
};
export const searchFilm = async (req: Request, res: Response) => {
	const { movieName } = req.query;
	const response = await tmdbApi.get("search/movie", {
		params: {
			query: movieName,
		},
	});
	const filmsFormated = await getFormatResponseFilm(response);
	res.json({ status: true, filmsFormated });
};

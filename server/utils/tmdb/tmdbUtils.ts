const tmdbApi = require("../../api/tmdb");

import { AxiosResponse } from "axios";
import { Details } from "../../interfaces/tmdb/MovieDetails";
import { Credits } from "../../interfaces/tmdb/MovieCredits";
import { Film } from "../../interfaces/tmdb/MovieSearch";
const moment = require("moment");

const searchCredits = async (
	idMovie: number,
	getInfo: string = "All"
): Promise<any> => {
	const result: AxiosResponse<Credits> = await tmdbApi.get(
		`movie/${idMovie}/credits`
	);
	if (getInfo === "director") {
		return result.data.crew.find((person) => person.job === "Director")?.name;
	} else {
		return result.data.crew;
	}
};
const searchDetails = async (
	idMovie: number,
	getInfo: string = "All"
): Promise<any> => {
	const result: AxiosResponse<Details> = await tmdbApi.get(`movie/${idMovie}`);
	if (getInfo === "genre") {
		return result.data.genres.map((genre) => genre.name);
	} else {
		return result.data.genres;
	}
};
export const getFormatResponseFilm = (arrayFilms: AxiosResponse<Film>) => {
	const filmPromises = arrayFilms.data.results.map(async (film) => {
		const [genre, director] = await Promise.all([
			searchDetails(film.id, "genre"),
			searchCredits(film.id, "director"),
		]);
		return {
			adult: film.adult,
			genre: genre,
			name: film.title,
			id: film.id,
			score: film.vote_average,
			image: `https://image.tmdb.org/t/p/w500/${film.poster_path}`,
			dateInsert: new Date(moment().format("YYYY-MM-DD")),
			director: director,
			isWatched: false,
		};
	});
	return Promise.all(filmPromises);
};

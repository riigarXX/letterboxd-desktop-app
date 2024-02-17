const tmdbApi = require("../../api/tmdb");
const moment = require("moment");
const searchCredits = async (idMovie, getInfo = "All") => {
    const result = await tmdbApi.get(`movie/${idMovie}/credits`);
    if (getInfo === "director") {
        return result.data.crew.find((person) => person.job === "Director")?.name;
    }
    else {
        return result.data.crew;
    }
};
const searchDetails = async (idMovie, getInfo = "All") => {
    const result = await tmdbApi.get(`movie/${idMovie}`);
    if (getInfo === "genre") {
        return result.data.genres.map((genre) => genre.name);
    }
    else {
        return result.data.genres;
    }
};
export const getFormatResponseFilm = (arrayFilms) => {
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
//# sourceMappingURL=tmdbUtils.js.map
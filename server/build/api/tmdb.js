import env from "../utils/env";
const axios = require("axios");
const apiKey = env.tmdbSecreKey;
export const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});
tmdbApi.interceptors.request.use((config) => {
    if (apiKey) {
        config.headers["Authorization"] = `Bearer ${apiKey}`;
        config.headers["accept"] = "application/json";
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
module.exports = tmdbApi;
//# sourceMappingURL=tmdb.js.map
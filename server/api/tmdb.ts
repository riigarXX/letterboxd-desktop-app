import env from "../utils/env";
const axios = require("axios");
const apiKey = env.tmdbSecreKey;

export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

tmdbApi.interceptors.request.use(
  (config: any) => {
    if (apiKey) {
      config.headers["Authorization"] = `Bearer ${apiKey}`;
      config.headers["accept"] = "application/json";
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

module.exports = tmdbApi;

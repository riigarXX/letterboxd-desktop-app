import Pelicula from "../../pages/pelicula.vue";
import agregarPelicula from "../../pages/agregarPelicula.vue";
import { isAuthenticated } from "../../middleware/auth";

const filmRoutes = [
  {
    name: "loadFilm",
    path: "/loadFilm/:ID",
    component: Pelicula,
    beforeEnter: isAuthenticated,
  },
  {
    name: "addFilm",
    path: "/addFilm/:day",
    component: agregarPelicula,
    beforeEnter: isAuthenticated,
  },
];

export default filmRoutes;

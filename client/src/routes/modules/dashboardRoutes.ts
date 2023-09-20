import { isAuthenticated } from "../../middleware/auth";
import Dashboard from "../../pages/dashboard.vue";
import Peliculas from "../../pages/peliculas.vue";
import Pendientes from "../../pages/pendientes.vue";
import Settings from "../../pages/settings.vue";

const dashboardRoutes = [
  {
    name: "dashboard",
    path: "/dashboard",
    component: Dashboard,
    beforeEnter: isAuthenticated,
    children: [
      {
        name: "films",
        path: "/films",
        component: Peliculas,
        beforeEnter: isAuthenticated,
      },
      {
        name: "pending",
        path: "/pending",
        component: Pendientes,
        beforeEnter: isAuthenticated,
      },
      {
        name: "settings",
        path: "/settings",
        component: Settings,
        beforeEnter: isAuthenticated,
      },
    ],
  },
];
export default dashboardRoutes;

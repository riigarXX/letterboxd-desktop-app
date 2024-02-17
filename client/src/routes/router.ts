import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import loginRoutes from "./modules/loginRoutes";
import dashboardRoutes from "./modules/dashboardRoutes";
import filmRoutes from "./modules/filmRoutes";
import routesRoutes from "./modules/routesRoutes";

const routes = [
	...loginRoutes,
	...dashboardRoutes,
	...filmRoutes,
	...routesRoutes,
];
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

const printRoutes = (routes: RouteRecordRaw[], parentPath = ""): void => {
	routes.forEach((route) => {
		const fullPath = `${parentPath}${route.path}`;
		console.log(`route -> ${route.name} -> ${fullPath}`);
		if (route.children) {
			printRoutes(route.children, fullPath);
		}
	});
};
printRoutes(routes);

export default router;

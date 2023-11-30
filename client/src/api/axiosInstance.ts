import axios from "axios";

const api = axios.create({
  // Configuración base de la instancia de Axios
  baseURL: "http://localhost:3000",
  // Otras configuraciones que necesites
});

// Interceptor para agregar el token JWT en los encabezados de todas las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Obtén el token JWT de donde lo hayas almacenado

    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;

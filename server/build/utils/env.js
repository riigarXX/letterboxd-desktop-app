import dotenv from "dotenv";
dotenv.config();
const { PORT, DB_MONGO, DB_BBDD, JWT_SECRET_KEY, TMDB_API_KEY } = process.env;
if (!PORT) {
    throw new Error("La variable de entorno PORT no está definida en el archivo .env");
}
if (!DB_MONGO) {
    throw new Error("La variable de entorno DB_HOST no está definida en el archivo .env");
}
if (!DB_BBDD) {
    throw new Error("La variable de entorno DB_BBDD no está definida en el archivo .env");
}
if (!JWT_SECRET_KEY) {
    throw new Error("La variable de entorno JWT_SECRET_KEY no está definida en el archivo .env");
}
if (!TMDB_API_KEY) {
    throw new Error("La variable de entorno TMDB_API_KEY no está definida en el archivo .env");
}
// Exportar las variables de entorno
export default {
    port: Number(PORT),
    dbHost: DB_MONGO,
    bbdd: DB_BBDD,
    jwtSecretKey: JWT_SECRET_KEY,
    tmdbSecreKey: TMDB_API_KEY,
};
//# sourceMappingURL=env.js.map
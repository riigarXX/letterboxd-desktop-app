import express from "express";
import { verifyToken } from "../middleware/auth";
import { getTrends, searchFilm } from "../controllers/tmdb/tmdbControllers";
const router = express.Router();
router.get("/getTrends", verifyToken, getTrends);
router.get("/searchFilm", verifyToken, searchFilm);
module.exports = router;
//# sourceMappingURL=tmdb.js.map
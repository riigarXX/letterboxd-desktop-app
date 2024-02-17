import express from "express";
import { verifyToken } from "../middleware/auth";
import { getAllRoutes } from "../controllers/routes/routesController";
const router = express.Router();

router.get("/getAllRoutes", verifyToken, getAllRoutes);

module.exports = router;

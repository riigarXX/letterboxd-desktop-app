const loadRoutes = require("express-list-endpoints");
import app from "../../main";
import RoutesInterface from "../../interfaces/RoutesInteface";
import { Request, Response } from "express";

export const getAllRoutes = (req: Request, res: Response) => {
  console.log(loadRoutes(app));
  const routes: Array<RoutesInterface> = loadRoutes(app);

  res.json({ status: true, routes });
};

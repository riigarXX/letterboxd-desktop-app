import { Request, Response } from "express";
import FilmModel from "../../models/FilmModel";
import mongoose from "mongoose";
import FilmInterface from "../../interfaces/FilmInterface";

export const getFilms = async (req: Request, res: Response) => {
	FilmModel.find().then(document => {
		res.json({ films: document });
	}).catch(e => {
		res.status(500).json("Error al obtener documentos");
	})
};
export const loadFilmByDay = async (req: Request, res: Response) => {
	const date = req.params.id;
	console.log(date)
	FilmModel.find({ dateInsert: date }).then(document => {
		res.json({ films: document });
	}).catch((e: mongoose.Error) => {
		console.log(e)
		res.status(500).json("Error al obtener documentos");
	})
};
export const saveFilm = async (req: Request, res: Response) => {
	const { films, day } = req.body

	const filmsWithDate = films.map((film: FilmInterface) => ({ ...film, dateInsert: day }));
	try {
		await FilmModel.insertMany(filmsWithDate, { ordered: false });
		res
			.status(200)
			.json({ status: true, msg: "Pelicula creada correctamente" });
	} catch (error) {
		console.log(error)
		res.status(500).json({ status: false, msg: "Error interno del servidor" });
	}
};

export const getFilmsNoViewed = async (req: Request, res: Response) => {
	FilmModel.find({ isWatched: false }).then(filmsNoViewed => {
		console.log(filmsNoViewed)
		res.json({ films: filmsNoViewed })
	}).catch((e: mongoose.Error) => {
		res.status(500).json({ status: false, msg: "Error interno del servidor" });
	})
}

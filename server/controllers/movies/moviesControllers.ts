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
	const { day } = req.body;
	console.log(day);
	try {
		const film = new FilmModel({
			nombre: "",
			puntuacion: "",
			genero: "",
			fechaInsercion: "",
		});
		await film.save();
		res
			.status(200)
			.json({ status: true, msg: "Pelicula creada correctamente" });
	} catch (error) {
		res.status(500).json({ status: false, msg: "Error interno del servidor" });
	}
};

export const getFilmsNoViewed = async (req: Request, res: Response) => {
	FilmModel.find({ isWatched: false }).then(filmsNoViewd => {
		res.json({ films: filmsNoViewd })
	}).catch((e: mongoose.Error) => {
		res.status(500).json({ status: false, msg: "Error interno del servidor" });
	})
}

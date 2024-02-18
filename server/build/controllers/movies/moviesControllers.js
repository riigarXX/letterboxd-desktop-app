import FilmModel from "../../models/FilmModel";
export const getFilms = async (req, res) => {
	FilmModel.find({}, (err, documents) => {
		if (err) {
			res.status(500).json("Error al obtener documentos");
		}
		console.log("documentos encontrados", documents);
		res.json(documents);
	});
};
export const loadFilmByDay = async (req, res) => {
	const { idFilm } = req.body;
	FilmModel.find({ id: idFilm }, (err, documents) => {
		if (err) {
			res.status(500).json("Error al obtener documentos");
		}
		console.log("documento encontrado", documents);
		res.json(documents);
	});
};
export const saveFilm = async (req, res) => {
	const { day } = req.body;
	console.log(day, "pasamoooooos");
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
	}
	catch (error) {
		res.status(500).json({ status: false, msg: "Error interno del servidor" });
	}
};
//# sourceMappingURL=moviesControllers.js.map

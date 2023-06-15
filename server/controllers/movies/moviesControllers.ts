import { Request, Response } from 'express'
import FilmModel from '../../models/FilmModel'
import mongoose from 'mongoose';
import FilmInterface from '../../interfaces/FilmInterface';

export const getFilms = async (req: Request, res: Response) => {
  FilmModel.find({}, (err: mongoose.Error, documents: FilmInterface[]) => {
    if (err) {
      res.status(500).json('Error al obtener documentos')
    }
    console.log('documentos encontrados', documents)
    res.json(documents)
  })
}
export const loadFilmByDay = async (req: Request, res: Response) => {
  const { idFilm } = req.body
  FilmModel.findOne({ id: idFilm }, (err: mongoose.Error, documents: FilmInterface) => {
    if (err) {
      res.status(500).json('Error al obtener documentos')
    }
    console.log('documento encontrado', documents)
    res.json(documents)
  })
}
export const saveFilm = async (req: Request, res: Response) => {
  const { day } = req.body
  console.log(day)
  try {
    const film = new FilmModel({ nombre: '', puntuacion: '', genero: '', fechaInsercion: '' })
    await film.save()
    res.status(200).json({ status: true, msg: 'Pelicula creada correctamente' })
  } catch (error) {
    res.status(500).json({ status: false, msg: 'Error interno del servidor' })
  }
}
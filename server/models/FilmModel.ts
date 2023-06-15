import { Schema, model } from "mongoose";
import FilmInterface from "../interfaces/FilmInterface";

const userSchema = new Schema<FilmInterface>({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  genero: {
    type: String,
    required: true,
  },
  puntuacion:{
    type:Number,
    required:true
  },
  fechaInsercion:{
    type:Date,
    required:true
  },
})

export default model('film', userSchema,'films')
import { Schema, model } from "mongoose";
import FilmInterface from "../interfaces/FilmInterface";

const userSchema = new Schema<FilmInterface>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  score: {
    type: Number,
    max: 10,
    min: 0,
    required: true,
  },
  dateInsert: {
    type: Date,
    required: true,
  },
  adult: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  director: {
    type: [String, undefined],
    required: false,
  },
});

export default model("film", userSchema, "films");

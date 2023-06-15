import { Schema, model } from "mongoose";
import AdminInterface from "../interfaces/AdminInterface";

const userSchema = new Schema<AdminInterface>({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
})

export default model('admin', userSchema,'admin')
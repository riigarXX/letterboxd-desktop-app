import { Schema, model } from "mongoose";
const userSchema = new Schema({
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
//# sourceMappingURL=FilmModel.js.map
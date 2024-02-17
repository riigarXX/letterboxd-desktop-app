import { Schema, model } from "mongoose";
const userSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
});
export default model('admin', userSchema, 'admin');
//# sourceMappingURL=AdminModel.js.map
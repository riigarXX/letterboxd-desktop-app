import { Request, Response } from "express";
import AdminModel from "../../models/AdminModel";
import { createJWT, createdCorrectly } from "../../utils/JWTUtils";

export const createUser = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  try {
    const admin = new AdminModel({ nombre: name, password: password });
    await admin.save();
    const token = createJWT({ id: admin?._id });
    createdCorrectly(token)
      ? res.json({ status: true, jwt: token, msg: "Usuario creado con exito" })
      : res.json({ status: false, jwt: null, msg: "Error al crear el jwt" });
    res.status(200).json({ status: true, jwt: token });
  } catch (error) {
    res.json({ status: false });
  }
};
export const checkUserCredentials = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  try {
    const admin = await AdminModel.findOne({
      nombre: name,
      password: password,
    });
    if (admin !== null) {
      const token = createJWT({ id: admin?._id });
      createdCorrectly(token)
        ? res.json({
            status: true,
            jwt: token,
            msg: "Usuario encontrado con exito",
          })
        : res.json({ status: false, jwt: null, msg: "Error al crear el jwt" });
    } else {
      res
        .status(404)
        .json({
          status: false,
          jwt: null,
          msg: "El usuario no se encuentra en la aplicacion",
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        status: false,
        jwt: null,
        message: "Error interno de la aplicacion",
      });
  }
};

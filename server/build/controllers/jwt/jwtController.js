import jsw from "jsonwebtoken";
import env from "../../utils/env";
export const jwtValidateToken = (req, res) => {
    const { token } = req.body;
    jsw.verify(token, env.jwtSecretKey, (err, Decode) => {
        if (Decode) {
            res
                .status(200)
                .json({ status: true, msg: "Token validado correctamente" });
        }
        else {
            res.status(502).json({ status: false, msg: "Error al validar el token" });
        }
    });
};
//# sourceMappingURL=jwtController.js.map
import jwt from "jsonwebtoken";
import env from "../utils/env";
export const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado" });
    }
    jwt.verify(token, env.jwtSecretKey, (err, decoded) => {
        console.log("pasamos");
        if (err) {
            return res.status(403).json({ message: "Token inválido" });
        }
        const decodedToken = decoded;
        req.userId = decodedToken.id;
        next();
    });
};
//# sourceMappingURL=auth.js.map
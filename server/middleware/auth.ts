import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import env from '../utils/env'
interface DecodedToken extends JwtPayload {
  id: string;
}
interface CustomRequest extends Request {
  userId?: string;
}

export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }
  
  jwt.verify(token, env.jwtSecretKey , (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }

    const decodedToken = decoded as DecodedToken;
    req.userId = decodedToken.id;
    next();
  });
}

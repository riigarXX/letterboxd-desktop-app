import { Request,Response } from 'express';
import jsw from "jsonwebtoken"
import env from '../../utils/env';

export const jwtValidateToken = (req:Request,res:Response) => {
  const {token } = req.body
  jsw.verify(token,env.jwtSecretKey,(err: any,Decode: any) => {
    if(Decode){
      res.status(200).json({status:true,msg:"Token validado correctamente"})
    }
    res.status(502).json({status:false,msg:"Error al validar el token"})
  })
}
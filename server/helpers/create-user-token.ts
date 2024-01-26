// json web token
import jwt from "jsonwebtoken";

import { Request, Response } from "express";
import { ObjectId } from "mongoose";

const createUserToken = async(user: any, req: Request, res: Response) => {

    // create a token
    const token = jwt.sign({
        // payload
        name: user.name,
        id: user._id
    }, "securitykey")

    // return token
    return res.json({ 
        message: "Você está autenticado",
        token: token
     })

}

export default createUserToken;
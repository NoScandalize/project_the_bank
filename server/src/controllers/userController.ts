import { Request, Response } from "express";
import bcrypt from "bcrypt";

// model
import { UserModel } from "../models/User";

// logger
import { logger } from "../../config/logger";

export async function createUser(req: Request, res: Response) {
  
    const { name, email, phone, password } = req.body;

    // password hash
    const salt = bcrypt.genSaltSync(12);
    const passwordHash = bcrypt.hashSync(password, salt);
    
    const userData = { 
        name: name,
        email: email,
        phone: phone,
        password: passwordHash,
        accountBalance: 0
    }

    try {

        await UserModel.create(userData)

        return res.status(201).json({ message: "O usuário foi criado com sucesso!" })

    } catch (err) {

        return res.status(500).json({ err })

    }

    

}

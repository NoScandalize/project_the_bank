import { Request, Response } from "express";
import bcrypt from "bcrypt";

// model
import { UserModel } from "../models/User";

// logger
import { logger } from "../../config/logger";

// token
import createUserToken from "../../helpers/create-user-token"

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

        const user = await UserModel.create(userData)

        await createUserToken(user, req, res)

        logger.info(`CREATE - userID: ${user._id} userName: ${name}`)

    } catch (err) {

        return res.status(500).json({ err })

    }

}

export async function login (req: Request, res: Response) {

    const { email, password } = req.body;

    try {

        const user = await UserModel.findOne( { email: email } )

        if(!user) {
            return res.status(422).json({ message: "Usuário não cadastrado" })
        }

        // check password
        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword) {
            return res.status(422).json({ message: "Email ou senha incorretos!" })
        }

        await createUserToken(user, req, res)

        logger.info(`LOGIN - userID: ${user._id} userName: ${user.name}`)

    } catch(err) {
        
        return res.status(500).json({ err })

    }

}

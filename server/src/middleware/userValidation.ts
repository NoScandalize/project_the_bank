import { body } from "express-validator";

// helper funtion
import checkIfUserExist from "../../helpers/check-if-user-exist";

export const userCreateValidation = () => {
    return [

        body("name")
        .isString()
        .withMessage("O nome é obrigatório!")
        .isLength({ min: 5 })
        .withMessage("O nome precisa ter no mínimo 5 caracteres!"),

        body("email")
        .isString()
        .withMessage("O email é obrigatório!")
        .isEmail()
        .withMessage("O email informado não é válido!")
        .custom(async (value) => {
            const check = await checkIfUserExist(value)

            if(check) {
                throw new Error("Email já está em uso!")
            }
        })
        .withMessage("Email já está em uso!"),

        body("phone")
        .isNumeric()
        .withMessage("O número de telefone é obrigatório"),

        body("password")
        .isString()
        .withMessage("A senha é obrigatória!")
        .isLength({ min: 8 })
        .withMessage("A senha precisa ter no mínimo 8 caracteres!")
        .isLength({ max: 20 })
        .withMessage("A senha precisa ter no máximo 20 caracteres!"),

        body("confirmPassword")
        .isString()
        .withMessage("A confirmação de senha é obrigatória!")
        .custom((value, { req }) => {
            return value == req.body.password;
        })
        .withMessage("As senha precisam ser iguais!")
    ]

}

export const userLoginValidation = () => {
    return [

        body("email")
        .isString()
        .withMessage("É necessário preencher o email!")
        .isEmail()
        .withMessage("O email informado não é válido!")
        .custom(async (value) => {
            const check = await checkIfUserExist(value)

            if(!check) {
                throw new Error("Email ou senha estão incorretos!")
            }
        })
        .withMessage("Email ou senha estão incorretos!"),

        body("password")
        .isString()
        .withMessage("É necessário preencher a senha.")

    ]
}
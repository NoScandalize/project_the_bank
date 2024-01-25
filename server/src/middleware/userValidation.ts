import { body } from "express-validator";

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
        .withMessage("O email informado não é válido!"),

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
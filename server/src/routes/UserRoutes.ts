import { Router, Request, Response } from "express";

// controller
import { createUser, login } from "../controllers/userController";

// validation middleware
import { validator } from "../middleware/handleValidation";
import { userCreateValidation, userLoginValidation } from "../middleware/userValidation";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Rota de usuário teste" });
});

router.post("/register", userCreateValidation(), validator, createUser);

router.post("/login", userLoginValidation(), validator, login)

export default router;

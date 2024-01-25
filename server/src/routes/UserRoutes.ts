import { Router, Request, Response } from "express";

// controller
import { createUser } from "../controllers/userController";

// validation middleware
import { validator } from "../middleware/handleValidation";
import { userCreateValidation } from "../middleware/userValidation";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Rota de usuário teste" });
});

router.post("/register", userCreateValidation(), validator, createUser);

export default router;

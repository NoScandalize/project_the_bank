import { Router, Request, Response } from "express";

// controller
import { createUser } from "../controllers/userController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Rota de usuário teste" });
});

router.post("/register", createUser);

export default router;

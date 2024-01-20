// ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

// Routes
import MainRoutes from "./routes/MainRoutes";
import UserRoutes from "./routes/UserRoutes";

// DataBase
import db from "../config/db";

// Logger
import { logger } from "../config/logger";

// Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

// application instantiation
const app = express();

// JSON middleware
app.use(express.json());

// HTTP Request Logger
app.use(morganMiddleware);

// routes
app.use("/", MainRoutes);
app.use("/user", UserRoutes);

// application port
const port = config.get<number>("port");

app.listen(port, async () => {
  await db();

  logger.info(`Aplicação iniciada com sucesso na porta ${port}`);
});

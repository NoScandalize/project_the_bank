// ENV variables
require("dotenv").config();

import express from "express";
import config from "config";

// Routes
import router from "./router";

// DataBase
import db from "../config/db";

// application instantiation
const app = express();

// JSON middleware
app.use(express.json());

app.use("/", router);

// application port
const port = config.get<number>("port");

app.listen(port,async () => {

    await db();

    console.log(`Aplicação iniciada com sucesso na porta ${port}`);
})
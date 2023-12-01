import express from "express";
import config from "config";

// Routes
import router from "./router";

// application instantiation
const app = express();

// JSON middleware
app.use(express.json());

app.use("/", router);

// application port
const port = config.get<number>("port");

app.listen(port, () => {
    console.log(`Aplicação iniciada com sucesso na porta ${port}`);
})
import express from "express";
import config from "config";

// application instantiation
const app = express();

// JSON middleware
app.use(express.json());

// application port
const port = config.get<number>("port");

app.listen(port, () => {
    console.log(`Aplicação iniciada com sucesso na porta ${port}`);
})
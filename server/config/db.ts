import mongoose from "mongoose";
import config from "config";

// Logger
import { logger } from "./logger";

async function connect() {

    const dbUri = config.get<string>("dbUri");

    try {

        await mongoose.connect(dbUri);
        logger.info("Conexão com o banco de dados realizada com sucesso!")

    } catch(error: any) {
        logger.error("Não foi possível conectar ao banco de dados.");
        logger.error(error)
    }

}

export default connect;
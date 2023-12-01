import mongoose from "mongoose";
import config from "config";

async function connect() {

    const dbUri = config.get<string>("dbUri");

    try {

        await mongoose.connect(dbUri);
        console.log("Conexão com o banco de dados realizada com sucesso!")

    } catch(error: any) {
        console.log("Não foi possível conectar ao banco de dados.");
        console.log(`Erro: ${error}`)
    }

}

export default connect;
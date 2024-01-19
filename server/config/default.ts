const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

export default {
    port: 3000,
    // uri database cloud
    // dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.ca7mmuk.mongodb.net/?retryWrites=true&w=majority`,
    // uri database local
    dbUri: "mongodb://127.0.0.1:27017",
    env: "development",
}
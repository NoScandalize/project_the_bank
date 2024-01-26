// user model
import { UserModel } from "../src/models/User";

export default async function checkIfUserExist (email: string) {

    try {

        const user = await UserModel.findOne({ email: email });

        if(user) {
            return true
        }
        
    } catch(err) {
        return true;
    }

}
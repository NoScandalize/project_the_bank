import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        confirmPassword: {
            type: String,
            required: true
        },
        accountBalance: {
            type: Number,
            required: true
        },
        transactionHistory: {
            type: Array
        },
    },
    {
        timestamps: true
    }
)

export const UserModel = model("User", userSchema);
import { model, Schema, Types } from "mongoose";

const transactionSchema = new Schema(
    {
        sourceAccount: {
            type: Types.ObjectId,
            required: true
        },
        destinationAccount: {
            type: Types.ObjectId,
            required: true
        },
        amout: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

export const TransactionModel = model("Transaction", transactionSchema);
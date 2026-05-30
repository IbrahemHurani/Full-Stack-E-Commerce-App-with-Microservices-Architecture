import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {

    try {
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log(`connected to MONGODB: ${conn.connection.host}`);

    } catch (error) {
        console.error(" MongoDB connection error details:", error.message);
        console.error(error); // This prints the entire error stack trace
        process.exit(1)

    }
}
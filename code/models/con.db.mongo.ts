import mongoose, { ConnectOptions } from "mongoose";
import { config } from "../utils/configs/configs";

// Replace with your actual MongoDB URI and database name

const options: ConnectOptions = {};

// Function to connect to MongoDB
export async function connectToMongoDB(): Promise<void> {
    try {
        await mongoose.connect(config.MongoDBUrl, options);

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the application if the connection fails
    }
}

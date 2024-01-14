import mongoose, { ConnectOptions } from "mongoose";
import { config } from "../utils/configs/configs";

const options: ConnectOptions = {
    connectTimeoutMS: 3000,
    serverSelectionTimeoutMS: 5000,
};

export async function connectToMongoDB(): Promise<void> {
    try {
        await mongoose.connect(config.MongoDBUrl, options);

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

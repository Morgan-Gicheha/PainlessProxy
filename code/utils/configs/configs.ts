import * as dotenv from "dotenv";
import { AppConfig } from "../interfaces/otherInterfaces";

dotenv.config();

const config = {
    Port: process.env.PORT || 3000,
    MongoDBUrl:process.env.MONGO_URL || "mongodb://localhost:27017/gateway"
};

export { config };

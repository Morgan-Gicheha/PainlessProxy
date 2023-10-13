import * as dotenv from "dotenv";
import { AppConfig } from "../schemas/otherInterfaces";

dotenv.config();

const config = {
    Port: process.env.PORT || 3000,
};

export { config };

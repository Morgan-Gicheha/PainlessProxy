import mongoose, { Schema, Document } from "mongoose";
import { RegistryInterface } from "../../utils/interfaces/mongo.db.intergace.schema";

// Define the schema for the registry collection
const registrySchema = new Schema<RegistryInterface>(
    {
        serviceName: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },

        country: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

const RegistryModel = mongoose.model<RegistryInterface>("Registry", registrySchema);

export { RegistryModel };

import { RegistryModel } from "../../models/mongo.schema/Registry.schema";
import { APIResponse, ServiceIdentityDetails } from "../interfaces/incomingData.interface.schema";

const saveRegistry = async (data: ServiceIdentityDetails) => {
    let response: APIResponse = { status: "" };
    return await new RegistryModel(data)
        .save()
        .then(() => {
            response.status = "000";
            response.message = "created!";
            return response;
        })
        .catch((err: Error) => {
            response.status = "091";
            response.message = err.message;
            return response;
        });
};

const getRegistry = async () => {
    return RegistryModel.find();
};

const getRegistryWithName = async (data: ServiceIdentityDetails): Promise<ServiceIdentityDetails | null> => {
    return RegistryModel.findOne({ serviceName: data.serviceName.trim() }) as unknown as ServiceIdentityDetails | null;
};

export { saveRegistry, getRegistry, getRegistryWithName };

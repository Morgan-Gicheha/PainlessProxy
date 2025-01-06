import { RegistryModel } from "../../models/mongo.schema/Registry.schema";
import { APIResponse, ServiceIdentityDetails } from "../interfaces/incomingData.interface.schema";
import axios from "axios";

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

    // as unknown as ServiceIdentityDetails | null;:
    // This part involves type assertions. It is using as unknown to assert that the result is of type unknown, and then using as ServiceIdentityDetails | null to further assert the type as ServiceIdentityDetails or null.
    // This is necessary because the result of findOne might be null, and TypeScript needs clarification on the type.
    // Credits to chatGPT 😆😆😆
};

const hrmsIndia = async (data: any) => {
    console.log("HRMS data=>/n",data);
    try {
        const response = await axios.post("https://hr.little.africa/api/leave/update", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return {status: "000", message: "OK", response: response.data};
    } catch (error) {
        console.error("Error in hrmsIndia API call:", error);
        return {
            status: "091",
            message: `something when calling service happened:\n${error}`,
        };
    }
};

export { saveRegistry, getRegistry, getRegistryWithName, hrmsIndia };

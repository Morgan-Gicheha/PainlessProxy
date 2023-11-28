import axios from "axios";

import { IncomingPaymentIntent, ServiceIdentityDetails } from "../interfaces/incomingData.interface.schema";

const callService = async (serviceData: ServiceIdentityDetails, data: IncomingPaymentIntent, method: string) => {
    const { url } = serviceData;

    console.log(serviceData);
    console.log(data);
    console.log(method);

    const options = {
        method: method,
        url: url,
        headers: { "Content-Type": "application/json" },
        data: data,
    };

    return await axios
        .request(options)
        .then(function (response) {
            return response.data
        })
        .catch(function (error:Error) {
            if (Object.keys(error).includes("status")) {
                return error
            }
            return {
                status:"091", message:error.message
            }

        });


};

export { callService };

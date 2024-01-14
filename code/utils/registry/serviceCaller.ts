import axios from "axios";

import { IncomingPaymentIntent, ServiceIdentityDetails } from "../interfaces/incomingData.interface.schema";

const callService = async (serviceData: ServiceIdentityDetails, data: IncomingPaymentIntent, method: string) => {
    const { url } = serviceData;

    const options = {
        method: method,
        url: url,
        headers: { "Content-Type": "application/json" },
        data: data,
    };

    console.log(options);
    return await axios
        .request(options)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error: Error) {
            return {
                status: "091",
                message: `something when calling service happened:\n${error}`,
            };
        });
};

export { callService };

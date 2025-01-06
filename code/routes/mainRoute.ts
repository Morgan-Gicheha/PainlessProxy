import express, { Router, Request, Response } from "express";
import { APIResponse, ServiceIdentityDetails } from "../utils/interfaces/incomingData.interface.schema";
import { getRegistryWithName, hrmsIndia } from "../utils/controllers/registry.controller";
import { callService } from "../utils/registry/serviceCaller";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const { details }: { details: ServiceIdentityDetails } = req.body;
    const service = await getRegistryWithName(details);



    if (!service) {
        res.send({ status: "091", message: "Invalid service name" });
        return;
    }

    // TODO: add Events to push  logs to RabbitMQ
    // https://github.com/Morgan-Gicheha/PainlessProxy?tab=readme-ov-file#loggingg

    const serviceResponse = await callService(service, req.body, req.method);
    console.log("res", serviceResponse)
    res.send(serviceResponse);
});

export { router };

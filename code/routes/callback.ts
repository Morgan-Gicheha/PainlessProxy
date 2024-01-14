import express, { Router, Request, Response } from "express";
import { getRegistryWithName } from "../utils/controllers/registry.controller";
import { ServiceIdentityDetails } from "../utils/interfaces/incomingData.interface.schema";
import { callService } from "../utils/registry/serviceCaller";

const router: Router = express.Router();

router.post("/:serviceID", async (req: Request, res: Response) => {
    const details = { serviceName: req.params.serviceID };
    const service = await getRegistryWithName(details);
    if (!service) {
        // TODO: emit LOG event for suspecios activity
        return;
    }

    const serviceResponse = await callService(service, req.body, req.method);
    res.send(serviceResponse);

});

export { router };

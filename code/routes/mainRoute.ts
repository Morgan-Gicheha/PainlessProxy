import express, { Router, Request, Response } from "express";
<<<<<<< HEAD
import { IncomingRequest } from "../utils/schemas/interface";

const router: Router = express.Router();

router.post("/", (req: Request, res: Response) => {
    // get url to call
    const data:IncomingRequest = req.body
    
    res.send({ hello: "world" });
=======
import { APIResponse, ServiceIdentityDetails } from "../utils/interfaces/incomingData.interface.schema";
import { getRegistryWithName } from "../utils/controllers/registry.controller";
import { callService } from "../utils/registry/serviceCaller";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const { details }: { details: ServiceIdentityDetails } = req.body;
    let service = await getRegistryWithName(details)
    if (!service) {
        res.send({status:"091",message:"Invalid service name"})
        return
    }

     const serviceResponse = await callService(service,req.body,req.method)

    res.send(serviceResponse);
>>>>>>> de97848390ff833562527c19a85bcd150c994784
});

export { router };

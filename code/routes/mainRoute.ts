import express, { Router, Request, Response } from "express";
import { APIResponse, ServiceIdentityDetails } from "../utils/interfaces/incomingData.interface.schema";
import { getRegistryWithName } from "../utils/controllers/registry.controller";
import { callService } from "../utils/registry/serviceCaller";

const router: Router = express.Router();

router.all("/", async (req: Request, res: Response) => {
    const { details }: { details: ServiceIdentityDetails } = req.body;
    let service = await getRegistryWithName(details)
    if (!service) {
        res.send({status:"091",message:"Invalid service name"})
        return
    }

     const serviceResponse = await callService(service,req.body,req.method)

    res.send(serviceResponse);
});

router.all("/me", (req,res)=>{
    console.log("I have been called....")
    res.send({me:"morgan"})
})

export { router };

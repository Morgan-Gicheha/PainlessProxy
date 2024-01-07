import express, { Router, Request, Response } from "express";
import { getRegistry, saveRegistry } from "../utils/controllers/registry.controller";
import { APIResponse } from "../utils/interfaces/incomingData.interface.schema";

const router: Router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const response: APIResponse = await saveRegistry(req.body);
    res.send(response);
});

router.get("/", async (req: Request, res: Response) => {
    const response= await getRegistry();
    res.send(response);
});
export { router };

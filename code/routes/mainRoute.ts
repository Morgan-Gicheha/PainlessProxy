import express, { Router, Request, Response } from "express";
import { IncomingRequest } from "../utils/schemas/interface";

const router: Router = express.Router();

router.post("/", (req: Request, res: Response) => {
    // get url to call
    const data:IncomingRequest = req.body
    
    res.send({ hello: "world" });
});

export { router };

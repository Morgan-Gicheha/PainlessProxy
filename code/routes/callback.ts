import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.post("/:serviceID", (req: Request, res: Response) => {
    res.send({ serviceID: req.params.serviceID });
});

export { router };

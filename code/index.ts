import express, { Express, Request, Response, Router } from "express";
import { router as callbackRouter } from "./routes/callback";
import { router as mainRouter } from "./routes/mainRoute";
import { router as registryRouter } from "./routes/registry";
import mongoose from "mongoose";

import { config } from "./utils/configs/configs";
import { connectToMongoDB } from "./models/con.db.mongo";

const app: Express = express();

app.use(express.json());

app.use("/initiate", mainRouter);
app.use("/test", mainRouter);
app.use("/callback", callbackRouter);
app.use("/registry", registryRouter);
app.all("*", (req,res)=>{
    console.log("I have been called....")
    console.log(req.baseUrl)
    console.log(req.url)
    res.send({me:"morgan"})
})

app.listen(config.Port, async () => {
    await connectToMongoDB();

    console.log(`⚡️[server]: Server is running at http://localhost:${config.Port}`);
});

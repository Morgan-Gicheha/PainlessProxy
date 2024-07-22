import express, { Express } from "express";
import { router as callbackRouter } from "./routes/callback";
import { router as mainRouter } from "./routes/mainRoute";
import { router as registryRouter } from "./routes/registry";
import mongoose from "mongoose";
import bodyParserXml from "body-parser-xml";

import { config } from "./utils/configs/configs";
import { connectToMongoDB } from "./models/con.db.mongo";

const app: Express = express();

// Configure XML body parser
bodyParserXml(express);
app.use(
    bodyParserXml({
        xml: {
            limit: "1MB", // Adjust the limit as needed
            explicitArray: false,
            explicitRoot: false,
        },
    })
);

app.use(express.json());

app.use("/initiate", mainRouter);
app.use("/callback", callbackRouter);
app.use("/registry", registryRouter);

app.listen(config.Port, async () => {
    await connectToMongoDB();

    console.log(`⚡️[server]: Server is running at http://localhost:${config.Port}`);
});

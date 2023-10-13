import express, { Express, Request, Response, Router } from "express";
import { router as callbackRouter } from "./routes/callback";
import { router as mainRouter } from "./routes/mainRoute";
import { config } from "./utils/configs/configs";

const app: Express = express();

app.use(express.json());

app.use("/initiate", mainRouter);
app.use("/callback", callbackRouter);

app.listen(config.Port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${config.Port}`);
});

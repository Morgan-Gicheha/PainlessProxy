"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const callback_1 = require("./routes/callback");
const mainRoute_1 = require("./routes/mainRoute");
const configs_1 = require("./utils/configs/configs");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/initiate", mainRoute_1.router);
app.use("/callback", callback_1.router);
app.listen(configs_1.config.Port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${configs_1.config.Port}`);
});

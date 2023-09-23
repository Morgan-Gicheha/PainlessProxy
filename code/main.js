const express = require("express");
const app = express();
const { config } = require("./utils/configs/config");

const main_route = require("./routes/main_route");
const callback_route = require("./routes/callback_route");

app.use(express.json());

app.use("/initiate", main_route);
app.use("/callback", callback_route);

app.listen(config.Port, () => {
    console.log(`[x] Running on http://localhost:${config.Port}`);
});

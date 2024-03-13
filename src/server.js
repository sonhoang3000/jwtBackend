import express from "express";
import configViewEngine from "./configs/viewEngine"
import initWebRouter from "./routes/web";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080

//config view engine
configViewEngine(app);

//init web route
initWebRouter(app);

app.listen(PORT, () => {
      console.log("JWT BACKEND is running on the port =" + PORT);
})
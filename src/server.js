import express from "express";
import configViewEngine from "./configs/viewEngine"
import initWebRouter from "./routes/web";
require("dotenv").config();
import bodyParser from 'body-parser';



const app = express();
const PORT = process.env.PORT || 8080

//config view engine
configViewEngine(app);

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//init web route
initWebRouter(app);

app.listen(PORT, () => {
      console.log("JWT BACKEND is running on the port =" + PORT);
})
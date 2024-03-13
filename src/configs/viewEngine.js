import express from "express";

/*

      @param {*} app -express app
*/
const configViewEngine = (app) => {
      app.use(express.static('./src/public')); // cho phep truy cap public
      app.set("view engine", "ejs"); // html   
      app.set("views", "./src/views"); // nơi truy cập
}

export default configViewEngine;
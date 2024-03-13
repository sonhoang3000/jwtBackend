import express from "express"

const router = express.Router();

/*

      @param {*} app -express app
*/
const initWebRouter = (app) => {
      // tham số thứ 1 là đường link url , tham số thứ 2 là hàm ...
      router.get("/", (req, res) => {
            return res.send("Hello World jwt")
      })

      return app.use("/", router);
}

export default initWebRouter;
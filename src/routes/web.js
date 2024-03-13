import express from "express"
import homeController from '../controller/homeController'

const router = express.Router();

/*

      @param {*} app -express app
*/



const initWebRouter = (app) => {
      // tham số thứ 1 là đường link url , tham số thứ 2 là hàm ...
      router.get("/", homeController.handleHelloController) // ko cần mở hoặc vì là tham chiếu chỉ cần gọi hàm 

      router.get("/user-page", homeController.handleUserPage)

      router.get("/about", (req, res) => {
            return res.send("Hello World about")
      })

      return app.use("/", router);
      //    return app.use("/abc", router);  http://localhost:8080/abc/user-page phai co "abc"
}

export default initWebRouter;
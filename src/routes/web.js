import express from "express"
import homeController from '../controller/homeController'

const router = express.Router();

/*

      @param {*} app -express app
*/

const initWebRouter = (app) => {
      // get là lấy data cho client, post là gửi data lên server
      // tham số thứ 1 là đường link url , tham số thứ 2 là hàm ...
      router.get("/", homeController.handleHelloController) // ko cần mở hoặc vì là tham chiếu chỉ cần gọi hàm 
      router.get("/user-page", homeController.handleUserPage) // get 
      router.post("/users/create-user", homeController.handleCreateNewUser)
      router.post("/delete/user/:id", homeController.handleDeleteUser)



      return app.use("/", router);
      //    return app.use("/abc", router);  http://localhost:8080/abc/user-page phai co "abc"
}

export default initWebRouter;
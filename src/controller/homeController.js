import userService from "../service/userService"

const handleHelloController = (req, res) => {
      const name = "Eric"
      return res.render('home.ejs', { name })
}

const handleUserPage = async (req, res) => {
      //model => get data from database
      let userList = await userService.getUserList();
      //cheeck userList Promise { <pending> } nếu bạn bị pending hãy dùng async await
      return res.render('user.ejs', { userList })
}

const handleCreateNewUser = (req, res) => {
      let emailController = req.body.emailName;
      let passwordController = req.body.userPassword;
      let usernameController = req.body.userName;

      // userService.createNewUser(emailController, passwordController, usernameController);

      return res.send("Haha create new user,")
}

module.exports = {
      handleHelloController, handleUserPage, handleCreateNewUser
}
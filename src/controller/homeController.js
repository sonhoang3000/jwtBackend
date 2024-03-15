import userService from "../service/userService"

const handleHelloController = (req, res) => {
      const name = "Eric"
      return res.render('home.ejs', { name })
}

const handleUserPage = (req, res) => {
      return res.render('user.ejs')
}

const handleCreateNewUser = (req, res) => {
      let emailController = req.body.emailName;
      let passwordController = req.body.userPassword;
      let usernameController = req.body.userName;

      // userService.createNewUser(emailController, passwordController, usernameController);
      userService.getUserList();

      return res.send("Haha create new user,")
}

module.exports = {
      handleHelloController, handleUserPage, handleCreateNewUser
}
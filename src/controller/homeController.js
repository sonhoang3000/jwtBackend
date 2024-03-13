const handleHelloController = (req, res) => {
      const name = "Eric"
      return res.render('home.ejs', { name })
}

const handleUserPage = (req, res) => {
      return res.render('user.ejs')
}

module.exports = {
      handleHelloController, handleUserPage
}
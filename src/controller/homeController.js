import mysql from 'mysql2'

const connection = mysql.createConnection({
      host: "localhost",
      user: 'root',
      database: 'jwt'
})


const handleHelloController = (req, res) => {
      const name = "Eric"
      return res.render('home.ejs', { name })
}

const handleUserPage = (req, res) => {
      return res.render('user.ejs')
}

const handleCreateNewUser = (req, res) => {
      let emailCreateNewUser = req.body.emailName;
      let passwordCreateNewUser = req.body.userPassword;
      let usernameCreateNewUser = req.body.userName;



      connection.query(
            `INSERT INTO users(email, password, username) VALUES('${emailCreateNewUser}', '${passwordCreateNewUser}', '${usernameCreateNewUser}')`,
            function (err, results, fields) {
                  if (err) {
                        console.log(err)
                  }
                  console.log(results) // results containts rows 
            }
      )

      return res.send("Haha create new user,")
}

module.exports = {
      handleHelloController, handleUserPage, handleCreateNewUser
}
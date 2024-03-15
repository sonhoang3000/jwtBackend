import bcrypt from "bcryptjs"
import mysql from 'mysql2'

const salt = bcrypt.genSaltSync(10);

//create the connection to database
const connection = mysql.createConnection({
      host: "localhost",
      user: 'root',
      database: 'jwt'
})

const hashUserPassword = (inputUserPassword) => {
      let hashPassword = bcrypt.hashSync(inputUserPassword, salt)
      return hashPassword
}

const createNewUser = (emailService, password, usernameService) => {
      let hashPassService = hashUserPassword(password)

      connection.query(
            `INSERT INTO users(email, password, username) VALUES('${emailService}', '${hashPassService}', '${usernameService}')`,
            function (err, results, fields) {
                  if (err) {
                        console.log(err)
                  }
            }
      )
}

const getUserList = () => {
      let users = [];
      connection.query(
            ` Select * from users`,
            function (err, results, fields) {
                  if (err) {
                        console.log(err)
                  }
                  console.log('check results', results)
            }
      )
}

module.exports = {
      createNewUser, getUserList
}
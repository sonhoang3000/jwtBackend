import bcrypt from "bcryptjs"
import mysql from 'mysql2/promise'
import bluebird from 'bluebird';


const salt = bcrypt.genSaltSync(10);

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

const getUserList = async () => {
      const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird })

      let users = [];
      // connection.query(
      //       ` Select * from users`,
      //       function (err, results, fields) {
      //             if (err) {
      //                   console.log(err)
      //             }
      //             console.log('check results', results)
      //       }
      // )

      try {
            const [rows, fields] = await connection.execute('Select * from users');
            return rows
      } catch (e) {
            console.log('check e', e)
      }


}

module.exports = {
      createNewUser, getUserList
}
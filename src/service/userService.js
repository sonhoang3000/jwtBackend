import bcrypt from "bcryptjs"
import mysql from 'mysql2/promise'
import bluebird from 'bluebird';


const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (inputUserPassword) => {
      let hashPassword = bcrypt.hashSync(inputUserPassword, salt)
      return hashPassword
}

const createNewUser = async (emailService, password, usernameService) => {
      let hashPassService = hashUserPassword(password)
      const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird })

      try {
            const [rows, fields] =
                  await connection.execute('INSERT INTO users (email,password,username) VALUES (?, ?, ?)', [emailService, hashPassService, usernameService]);
            return rows
      } catch (e) {
            console.log('check e', e)
      }
}

const getUserList = async () => {
      const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird })
      try {
            const [rows, fields] = await connection.execute('Select * from users');
            return rows
      } catch (e) {
            console.log('check e', e)
      }
}

const deleteUser = async (id) => {
      const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird })

      try {
            const [rows, fields] = await connection.execute('DELETE FROM users WHERE id=?', [id]);
            return rows
      } catch (e) {
            console.log('check e', e)
      }
}

const getUserById = async (id) => {
      const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird })

      try {
            const [rows, fields] = await connection.execute('Select * FROM users WHERE id=?', [id]);
            return rows
      } catch (e) {
            console.log('check e', e)
      }
}

const updateUserInfor = async (email, username, id) => {
      const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird })

      try {
            const [rows, fields] = await connection.execute('UPDATE users SET email =?, username= ? WHERE id = ? ', [email, username, id]);
            return rows
      } catch (e) {
            console.log('check e', e)
      }
}

module.exports = {
      createNewUser, getUserList, deleteUser, getUserById, updateUserInfor
}
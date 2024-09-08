const db = require('../database');

class UserClass {
  static async getAllUsers() {
    return db.promise().query('SELECT * FROM users');
  }

  static async createUser(userData) {
    return db.promise().query('INSERT INTO users SET ?', userData);
  }

  static async getUserById(userId) {
    return db.promise().query('SELECT * FROM users WHERE id = ?', [userId]);
  }

  static updateUser(userId, updatedData) {
    return db
      .promise()
      .query('UPDATE users SET ? WHERE id = ?', [updatedData, userId]);
  }

  static async deleteUser(userId) {
    return db.promise().query('DELETE FROM users WHERE id = ?', [userId]);
  }
}

module.exports = UserClass;

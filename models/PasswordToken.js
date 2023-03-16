var knex = require("../database/connection");
const User = require("./User");
var user = require("./User");

class PasswordToken {
  async create(email) {
    var user = await User.findByEmail(email);

    if (user != undefined) {
      try {
        var token = Date.now();
        await knex
          .insert({
            user_id: user.id,
            used: 0,
            token: token
          })
          .table("passwordtokens");
        return { status: true, token: token };
      } catch (err) {
        console.log(err);
        return { satus: false, err: err };
      }
    } else {
      return {
        status: false,
        err: "O e-mail passadado não existe no banco de dados.",
      };
    }
  }
}

module.exports = new PasswordToken();

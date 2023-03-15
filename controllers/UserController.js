var User = require("../models/User");
class UserController {
  async index(req, res) {}

  async create(req, res) {
    var { name, email, password } = req.body;

    if (email == undefined) {
      res.status(400);
      res.json({ err: "O e-mail é inválido." });
      return;
    }

    var emailExists = await User.findEmail(email);

    if (emailExists) {
      res.status(406);
      res.json({ err: "O email já está cadastrado." });
      return;
    }

    await User.new(email, password, name);
    
    res.status(200);
    res.send("Usuário cadastrado com sucesso.");
  }
}

module.exports = new UserController();

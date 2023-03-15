var User = require("../models/User");
class UserController {
  async index(req, res) {
    var users = await User.findAll();
    res.json(users);
  }

  async findUser(req, res){
    var id = req.params.id;
    var user = await User.findById(id);

    if(user == undefined){
      res.status(404);
      res.json({});
    }else{
      res.status(200);
      res.json(user);
    }
  }

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

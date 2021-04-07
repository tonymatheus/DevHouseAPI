//métodos : Index,show,Update, store , destroy
import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    //verifica se existe usuário
    let user = await User.findOne({ email });
    //verifica se não existe usuário com o mesmo email
    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();

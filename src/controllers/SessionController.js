// métodos : Index,show,Update, store , destroy
import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação de email' });
    }
    // verifica se existe usuário
    let user = await User.findOne({ email });
    // verifica se não existe usuário com o mesmo email
    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();

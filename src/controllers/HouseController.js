import * as Yupe from 'yup';
import House from '../models/House';
import User from '../models/User';

class Housecontroller {
  async index(req, res) {
    const { status } = req.query;

    const houses = await House.find({ status });

    return res.json(houses);
  }

  async update(req, res) {
    const schema = Yupe.object().shape({
      description: Yupe.string().required(),
      price: Yupe.number().required(),
      location: Yupe.string().required(),
      status: Yupe.boolean().required(),
    });

    const { filename } = req.file;
    const { house_id } = req.params;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Erro na validação' });
    }

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    if (String(user._id) !== String(houses.user)) {
      return res
        .status(401)
        .json({ erro: 'Usuário não autorizado para atualizar casa' });
    }

    await House.updateOne(
      { _id: house_id },
      {
        user: user_id,
        thumbnail: filename,
        description,
        price,
        location,
        status,
      }
    );

    return res.send();
  }

  // cadastra novas casas
  async store(req, res) {
    const schema = Yupe.object().shape({
      description: Yupe.string().required(),
      price: Yupe.number().required(),
      location: Yupe.string().required(),
      status: Yupe.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ erro: 'Erro na validação' });
    }

    const { filename } = req.file;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,
    });

    return res.json(house);
  }

  async destroy(req, res) {
    const { house_id } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const houses = await House.findById(house_id);

    if (String(user._id) !== String(houses.user)) {
      return res
        .status(401)
        .json({ erro: 'Usuário não autorizado para excluir casa' });
    }

    await House.findByIdAndDelete({ _id: house_id });

    return res.json({ message: 'excluida com sucesso!!' });
  }
}

export default new Housecontroller();

const { Trainees } = require('../models/trainees');

module.exports = {
  async postTrainee(req, res) {
    try {
      const { 
        name,
        email,
        rg,
        cpf,
        primary_phone_contact,
        secondary_phone_contact,
        date_birth,
        father_name,
        mother_name,
        have_special_needs } = req.body;

       const existingTrainee = await Trainees.findOne({
         where: {
          [Op.or]: [{ cpf }, { rg }]
        }
      });

      if (existingTrainee) {
        return res.status(400).json({ error: 'CPF ou RG já cadastrados' });
      }
 
      const trainee = await Trainees.create({
        name,
        email,
        rg,
        cpf,
        primary_phone_contact,
        secondary_phone_contact,
        date_birth,
        father_name,
        mother_name,
        have_special_needs,
        created_at,
        updated_at
      });

      return res.status(201).json(trainee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao cadastrar estagiário' });
    }
  },

  async getTrainees(req, res) {
    try {
      const trainees = await Trainees.findAll();
      return res.json(trainees);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar estagiários' });
    }
  },

  async getTraineeById(req, res) {
    try {
      const { id } = req.params;
      const trainee = await Trainees.findByPk(id);

      if (!trainee) {
        return res.status(404).json({ error: 'Estagiário não encontrado' });
      }

      return res.json(trainee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter informações do estagiário' });
    }
  },

  async updateTraineeById(req, res) {
    try {
      const { id } = req.params;
      const { name, email, rg, cpf, primary_phone_contact, secondary_phone_contact, date_birth, father_name, mother_name, have_special_needs } = req.body;

      const trainee = await Trainees.findByPk(id);

      if (!trainee) {
        return res.status(404).json({ error: 'Estagiário não encontrado' });
      }

       const existingTrainee = await Trainees.findOne({
        where: {
          [Op.and]: [
            { id: { [Op.ne]: id } },
            { [Op.or]: [{ cpf }, { rg }] }
          ]
        }
      });

      if (existingTrainee) {
        return res.status(400).json({ error: 'CPF ou RG já cadastrados' });
      }

       trainee.name = name;
      trainee.email = email;
      trainee.rg = rg;
      trainee.cpf = cpf;
      trainee.primary_phone_contact = primary_phone_contact;
      trainee.secondary_phone_contact = secondary_phone_contact;
      trainee.date_birth = date_birth;
      trainee.father_name = father_name;
      trainee.mother_name = mother_name;
      trainee.have_special_needs = have_special_needs;
 
      await trainee.save();

      return res.json(trainee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar informações do estagiário' });
    }
  }
};

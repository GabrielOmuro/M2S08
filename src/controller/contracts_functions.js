const { Contracts } = require('../models/contracts');
const { Trainees } = require('../models/trainees');
const { Companies } = require('../models/companies');

module.exports = {
  async postContract(req, res) {
    try {
      const {
        trainee_id,
        category_id,
        company_id,
        start_validity,
        end_validity,
        remuneration,
        extra
      } = req.body;

       const existingTrainee = await Trainees.findByPk(trainee_id);
      const existingCategory = await Categories.findByPk(category_id);
      const existingCompany = await Companies.findByPk(company_id);

      if (!existingTrainee || !existingCategory || !existingCompany) {
        return res.status(404).json({ error: 'Estagiário, categoria ou empresa não encontrados' });
      }

      const created_at = new Date();
      const updated_at =new Date();
      const contract = await Contracts.create({
        trainee_id,
        category_id,
        company_id,
        start_validity,
        end_validity,
        status: true,
        remuneration,
        extra,
        created_at,
        updated_at
      });

      return res.status(201).json(contract);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao cadastrar contrato' });
    }
  },

  async getContracts(req, res) {
    try {
      const contracts = await Contracts.findAll({
        include: [
          {
            model: Trainees,
            as: 'trainee'
          },
          {
            model: Categories,
            as: 'category'
          },
          {
            model: Companies,
            as: 'company'
          }
        ]
      });

      return res.json(contracts);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar contratos' });
    }
  },

  async getContractById(req, res) {
    try {
      const { id } = req.params;
      const contract = await Contracts.findByPk(id, {
        include: [
          {
            model: Trainees,
            as: 'trainee'
          },
          {
            model: Categories,
            as: 'category'
          },
          {
            model: Companies,
            as: 'company'
          }
        ]
      });

      if (!contract) {
        return res.status(404).json({ error: 'Contrato não encontrado' });
      }

      return res.json(contract);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter informações do contrato' });
    }
  },

  async deactivateContract(req, res) {
    try {
      const { id } = req.params;

      const contract = await Contracts.findByPk(id);

      if (!contract) {
        return res.status(404).json({ error: 'Contrato não encontrado' });
      }

       if (!contract.status) {
        return res.status(400).json({ error: 'O contrato já está desativado' });
      }
       contract.status = false;
      contract.updated_at = new Date();

      await contract.save();

      return res.json(contract);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao desativar contrato' });
    }
  }
};

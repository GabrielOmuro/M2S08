const { Companies } = require('../models/companies');

module.exports = {
  async postCompany(req, res) {
    try {
      const {
        cnpj,
        company_name,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rh_analyst_name,
        supervisor_name
      } = req.body;

       const existingCompany = await Companies.findOne({
        where: {
          cnpj
        }
      });

      if (existingCompany) {
        return res.status(400).json({ error: 'CNPJ já cadastrado' });
      }
 
      const company = await Companies.create({
        cnpj,
        company_name,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rh_analyst_name,
        supervisor_name,
        created_at,
        updated_at
      });

      return res.status(201).json(company);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao cadastrar empresa' });
    }
  },

  async getCompanies(req, res) {
    try {
      const companies = await Companies.findAll();
      return res.json(companies);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar empresas' });
    }
  },

  async getCompanyById(req, res) {
    try {
      const { id } = req.params;
      const company = await Companies.findByPk(id);

      if (!company) {
        return res.status(404).json({ error: 'Empresa não encontrada' });
      }

      return res.json(company);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao obter informações da empresa' });
    }
  },

  async updateCompany(req, res) {
    try {
      const { id } = req.params;
      const {
        cnpj,
        company_name,
        contact,
        cep,
        address,
        neighborhood,
        city,
        state,
        number,
        complement,
        rh_analyst_name,
        supervisor_name
      } = req.body;

      const company = await Companies.findByPk(id);

      if (!company) {
        return res.status(404).json({ error: 'Empresa não encontrada' });
      }

       const existingCompany = await Companies.findOne({
        where: {
          [Op.and]: [
            { id: { [Op.ne]: id } },
            { cnpj }
          ]
        }
      });

      if (existingCompany) {
        return res.status(400).json({ error: 'CNPJ já cadastrado' });
      }

      company.cnpj = cnpj;
      company.company_name = company_name;
      company.contact = contact;
      company.cep = cep;
      company.address = address;
      company.neighborhood = neighborhood;
      company.city = city;
      company.state = state;
      company.number = number;
      company.complement = complement;
      company.rh_analyst_name = rh_analyst_name;
      company.supervisor_name = supervisor_name;
       
      await company.save();

      return res.json(company);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar informações da empresa' });
    }
  }
};

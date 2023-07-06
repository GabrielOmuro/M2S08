const { Categories } = require('../models/category');

module.exports = {
  async getCategories(request, response) {
    try {
      const categories = await Categories.findAll();
      console.log(categories);
      return response.json(categories);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Erro ao obter categorias' });
    }
  },

  async postCategories(request, response) {
    try {
      const { name } = request.body;
      const created_at = new Date();
      const updated_at =new Date();

      if (!name) {
        return response.status(400).json({ error: 'O nome da categoria é obrigatório' });
      }

      const category = await Categories.create({ name, created_at, updated_at });
      console.log(category);
      return response.json(category);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Erro ao criar categoria' });
    }
  },
  async deleteAllCategories(request, response) {
    try {
      await Categories.destroy({ where: {} });
      return response.json({ message: 'Todas as categorias foram excluídas com sucesso' });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Erro ao excluir todas as categorias' });
    }
  },
  async deleteCategoryById(request, response) {
    try {
      const { id } = request.params;
      const deletedCategoryCount = await Categories.destroy({ where: { id } });

      if (deletedCategoryCount === 0) {
        return response.status(404).json({ error: 'Categoria não encontrada' });
      }

      return response.json({ message: 'Categoria excluída com sucesso' });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Erro ao excluir a categoria' });
    }
  },
  async deleteCategoryByName(request, response) {
    try {
      const { name } = request.params;
      const deletedCategoryCount = await Categories.destroy({ where: { name } });

      if (deletedCategoryCount === 0) {
        return response.status(404).json({ error: 'Categoria não encontrada' });
      }

      return response.json({ message: 'Categoria excluída com sucesso' });
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: 'Erro ao excluir a categoria' });
    }
  }
};

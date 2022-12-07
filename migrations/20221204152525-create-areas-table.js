module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('areas', {
      // nome de tabela é no PLURAL
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nameAreas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      diasFuncionamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      horasFuncionamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('areas');
  },
};
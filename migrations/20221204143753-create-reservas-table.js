module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('reservas', {
      // nome de tabela é no PLURAL
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nameArea: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diaEntrada: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      diaSaida: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      horaEntrada: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      horaSaida: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      comentario: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('reservas');
  },
};
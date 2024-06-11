module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Filieres', 'nom', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Filieres', 'nom');
  }
};

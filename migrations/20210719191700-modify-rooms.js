'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('rooms', 'test', {
            type: Sequelize.STRING,
            allowNull: true,
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Campaigns', 'status');
    }
};
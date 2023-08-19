import Sequelize from "sequelize";

export const sequelize = new Sequelize('disney', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql'
})
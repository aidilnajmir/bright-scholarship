import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('bright_scholarship', 'postgres', 'Kong8yaOLC', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Set to true for logging SQL queries
});

export default sequelize;

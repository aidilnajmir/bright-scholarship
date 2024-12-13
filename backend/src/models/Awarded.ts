import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import Application from './Application'; // Import Application model
import User from './User'; // Import User model

class Awarded extends Model {}

Awarded.init(
  {
    awardid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    awardamount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    awarddate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Awarded',
    tableName: 'awarded',  // Explicitly set the table name to lowercase
    timestamps: false,
  }
);

// Define associations
Awarded.belongsTo(Application, { foreignKey: 'applicationid' });
Awarded.belongsTo(User, { foreignKey: 'userid' });

export default Awarded;

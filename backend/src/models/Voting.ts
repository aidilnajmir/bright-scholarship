import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
import User from './User'; // Import User model
import Application from './Application'; // Import Application model

class Voting extends Model {}

Voting.init(
  {
    voteid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vote: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    votedate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Voting',
    tableName: 'voting',  // Explicitly set the table name to lowercase
    timestamps: false,
  }
);

// Define associations
Voting.belongsTo(User, { foreignKey: 'userid' });
Voting.belongsTo(Application, { foreignKey: 'applicationid' });

export default Voting;

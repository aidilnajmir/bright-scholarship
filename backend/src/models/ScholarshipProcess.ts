import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class ScholarshipProcess extends Model {}

ScholarshipProcess.init(
  {
    processid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    applicationstart: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    applicationend: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    votingstart: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    votingend: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ScholarshipProcess',
    tableName: 'scholarshipprocess',  // Explicitly set the table name to lowercase
    timestamps: false,
  }
);

export default ScholarshipProcess;

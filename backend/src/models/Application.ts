import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';

class Application extends Model {}

Application.init(
  {
    applicationid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    studentnumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phonenumber: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    dateofbirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    cumulativegpa: {
      type: DataTypes.DECIMAL(3, 2),
      allowNull: false,
    },
    credithourstaken: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    submissiondate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    applicationstatus: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    eligiblestatus: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    awardstatus: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',  // Ensure this matches the actual table name
        key: 'userid',
      },
    },
  },
  {
    sequelize,
    modelName: 'Application',
    tableName: 'applications',  // Ensure this matches the table name
    timestamps: false,
  }
);

export default Application;

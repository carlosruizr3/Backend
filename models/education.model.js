import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class EducationModel extends Model { }

EducationModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    level: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    institution: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    type: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'education',
    timestamps: false,
})

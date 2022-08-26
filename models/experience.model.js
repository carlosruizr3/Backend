import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class ExperienceModel extends Model { }

ExperienceModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    area: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    business: {
        type: DataTypes.STRING(120),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'experience',
    timestamps: false,
})
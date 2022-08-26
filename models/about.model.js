import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class AboutModel extends Model { }

AboutModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    birth: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'about',
    timestamps: false,
})

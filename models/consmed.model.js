import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class ConsmedModel extends Model { }

ConsmedModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    sucursal: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    medico: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    fecha: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    consumibles: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'consmed',
    timestamps: false,
})
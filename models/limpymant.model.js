import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class LimpymantModel extends Model { }

LimpymantModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    sucursal: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    hInicio: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    hFin: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    empleado: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    observaciones: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'limpymant',
    timestamps: false,
})
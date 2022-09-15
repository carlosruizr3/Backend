import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class FormventaModel extends Model { }

FormventaModel.init({
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
    ventaDia: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    recargas: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    servicios: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    tarjeta: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    otrosGast: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    dolares: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'contconsult',
    timestamps: false,
})
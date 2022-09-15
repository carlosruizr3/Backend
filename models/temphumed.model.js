import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class TemphumedModel extends Model { }

TemphumedModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    sucursal: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    empleado: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    fecha: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    temperaturaLec: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    humedadLec: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'temphumed',
    timestamps: false,
})
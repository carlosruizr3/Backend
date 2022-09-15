import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class TempdiapersModel extends Model { }

TempdiapersModel.init({
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
    empleadoTemp: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    medicoTemp: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    horaLect: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    empleado: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'tempdiapers',
    timestamps: false,
})
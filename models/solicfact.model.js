import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class SolicfactModel extends Model { }

SolicfactModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    rfc: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    codpost: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    fechaComp: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    numerTiket: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    formaPago: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    sucursal: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    usoCFDI: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    correoE: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    
}, {
    sequelize: DatabaseConfig,
    tableName: 'solicfact',
    timestamps: false,
})
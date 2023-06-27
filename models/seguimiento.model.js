import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class SeguimientoModel extends Model { }

SeguimientoModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    dispositivo: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    estatus: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    actFijo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    numSerie: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    almacenamiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    galodep: {
        type: DataTypes.STRING(25),
        allowNull: false,  
    },
    nomResp: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    fecha: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'seguimiento',
    timestamps: false,
})

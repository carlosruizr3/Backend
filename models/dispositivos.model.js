import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class DispositivosModel extends Model { }

DispositivosModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    actFijo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dispositivo: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    numSerie: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    galodep: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    nomEquipo: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    fecha: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'dispositivos',
    timestamps: false,
})

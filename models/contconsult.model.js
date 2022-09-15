import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class ContconsultModel extends Model { }

ContconsultModel.init({
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
    vistas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    aseguradas: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    procedimientos: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    domingos: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    importeRec: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'contconsult',
    timestamps: false,
})
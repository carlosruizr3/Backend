import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class InventariosrealizadosModel extends Model { }
InventariosrealizadosModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    tipoActivo: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    numSerie: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    nomGal: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    existencia: {
        type: DataTypes.STRING(4),
        allowNull: false
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fechaInv: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'inventariosRealizados',
    timestamps: false,
}
);

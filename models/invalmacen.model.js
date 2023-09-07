import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class InvalmacenModel extends Model { }
InvalmacenModel.init({
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
    actFijo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    anoEquipo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechaCompra: {
        type: DataTypes.DATE,
        allowNull: false
    },
    costoNeto: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'invAlmacen',
    timestamps: false,
}
);

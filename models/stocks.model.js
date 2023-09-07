import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class StocksModel extends Model { }
StocksModel.init({
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
    saldoActual: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    resurtir: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'stocks',
    timestamps: false,
}
);

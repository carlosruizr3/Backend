import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";

export class SupervisorModel extends Model { }
SupervisorModel.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nomSupv: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'supervisor',
    timestamps: false,
}
);

import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.js";


export class EquiposModel extends Model { }

EquiposModel.init({
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
    equipo: {
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
    modelo: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nomEquipo: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    usuario: {
        type: DataTypes.STRING(35),
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING(35),
        allowNull: false,
    },
    licAdobe: {
        type: DataTypes.STRING(35),
        allowNull: false,
    },
    apps: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    antivirus: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    procesador: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    ram: {
        ttype: DataTypes.INTEGER,
        allowNull: false,
    },
    almacenamiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    gpu	: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    sisOperativo: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    galodep: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    logmein: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    ultAct: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    comentarios: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'equipos',
    timestamps: false,
})

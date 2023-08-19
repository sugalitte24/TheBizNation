import { DataTypes } from "sequelize";
import { sequelize } from "../databases/connection.js";
import { Pelicula } from "./pelicula.js";

export const Genero = sequelize.define('genero', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.INTEGER
    },
},
    {
        paranoid: true
    })
Genero.hasMany(Pelicula, {
    foreigngKey: 'generoId',
    sourceKey: 'id'
})

Pelicula.belongsTo(Genero, {
    foreigngKey: 'generoId',
    targetId: 'id'
})
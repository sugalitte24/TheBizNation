import { Pelicula } from "../model/pelicula.js";
import { Personaje } from "../model/personajes.js";
import { Op } from "sequelize";

export const getPersonajes = async (req, res) => {

    const { nombre, edad, pelicula } = req.query;
    try {

        const personajes = await Personaje.findAll({
            where: {
                [Op.or]: [
                    { nombre: `${nombre || ""}` },
                    { edad: `${edad || ""}` },
                    //{ pelicula: `${pelicula || ""}` }
                ]
            },
            include: {
                model: Pelicula
            }
        })
        res.json(personajes)
    } catch (error) {
        return res.status(422).json({ message: error.message })
    }
}

export const createPersonaje = async (req, res) => {
    const { nombre, edad, peso, historia } = req.body
    const { titulo, calificacion } = req.body.pelicula
    try {
        const newPersonaje = await Personaje.create({
            nombre, edad, peso, historia, titulo, calificacion
        })
        const newPelicula = await Pelicula.create({
            titulo, calificacion
        })

        await newPersonaje.addPeliculas(newPelicula);
        res.json(newPersonaje)
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

export const updatePersonaje = async (req, res) => {
    const { id } = req.params
    const { nombre, edad, peso, historia } = req.body
    try {
        const personaje = await Personaje.findByPk(id)
        personaje.nombre = nombre
        personaje.edad = edad
        personaje.peso = peso
        personaje.historia = historia

        await personaje.save()
        res.json(personaje)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updatePersonaje2 = async (req, res) => {
    const { id } = req.params
    try {
        const personaje = await Personaje.findByPk(id)
        personaje.set(req.body)
        await personaje.save()
        res.json(personaje)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deletePersonaje = async (req, res) => {
    try {
        const { id } = req.params
        await Personaje.destroy({
            where: {
                id
            }
        })
        res.send(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getById = async (req, res) => {
    const { id } = req.params
    try {
        const personaje = await Personaje.findOne({
            where: {
                id
            },
            include: {
                model: Pelicula
            }
            //attributes:['nombre']
        })

        if (!personaje) return res.status(404).json({ message: "No existe personaje" })
        res.json(personaje)
    } catch (error) {

    }
}
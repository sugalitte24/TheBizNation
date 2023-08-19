import { Pelicula } from "../model/pelicula.js";
import { Personaje } from "../model/personajes.js";


export const getPeliculas = async (req, res) => {
    try {
        const peliculas = await Pelicula.findAll()
        res.json({
            titulo: peliculas.titulo, imagen: peliculas.imagen,
            fechaCreacion: peliculas.fechaCreacion
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createPelicula = async (req, res) => {
    const { titulo, fechaCreacion, calificacion, generoId } = req.body
    const { nombre, edad, peso, historia } = req.body.personaje

    try {
        const newPelicula = await Pelicula.create({
            titulo, fechaCreacion, calificacion, generoId
        })

        const newPersonaje = await Personaje.create({
            nombre, edad, peso, historia, titulo, calificacion
        })
        await newPelicula.addPersonajes(newPersonaje)
        res.json(newPelicula)
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

export const updatePelicula = async (req, res) => {
    const { id } = req.params
    try {
        const pelicula = await Pelicula.findByPk(id)
        pelicula.set(req.body)
        await pelicula.save()
        res.json(pelicula)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deletePelicula = async (req, res) => {
    try {
        const { id } = req.params
        await Pelicula.destroy({
            where: {
                id
            }
        })
        res.send(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getPeliculaById = async (req, res) => {
    const { id } = req.params
    try {
        const pelicula = await Pelicula.findOne({
            where: {
                id
            },
            //attributes:['nombre']
        })

        if (!pelicula) return res.status(404).json({ message: "No existe pelicula" })
        res.json(pelicula)
    } catch (error) {

    }
}
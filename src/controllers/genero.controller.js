import { Genero } from "../model/genero.js";

export const getGeneros = async (req, res) => {
    try {
        const genero = await Genero.findAll()
        res.json(genero)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createGenero = async (req, res) => {
    const { nombre, imagen } = req.body
    try {
        const newGenero = await Genero.create({
            nombre, imagen
        })
        res.json(newGenero)
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

export const updateGenero = async (req, res) => {
    const { id } = req.params
    try {
        const genero = await Genero.findByPk(id)
        genero.set(req.body)
        await genero.save()
        res.json(genero)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteGenero = async (req, res) => {
    try {
        const { id } = req.params
        await Genero.destroy({
            where: {
                id
            }
        })
        res.send(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getGeneroById = async (req, res) => {
    const { id } = req.params
    try {
        const genero = await Genero.findOne({
            where: {
                id
            },
            //attributes:['nombre']
        })

        if (!genero) return res.status(404).json({ message: "No existe genero" })
        res.json(genero)
    } catch (error) {

    }
}
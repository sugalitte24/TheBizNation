import { Router } from "express";
import { getGeneros, getGeneroById, createGenero, updateGenero, deleteGenero } from "../controllers/genero.controller.js";
const router = Router()

router.get('/genero', getGeneros)
router.get('/genero/:id', getGeneroById)
router.post('/genero', createGenero)
router.patch('/genero/:id', updateGenero)
router.delete('/genero/:id', deleteGenero)


export default router
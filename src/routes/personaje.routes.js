import { Router } from "express";
import { createPersonaje, deletePersonaje, getById, getPersonajes, updatePersonaje } from "../controllers/personaje.controller.js";
import { validateToken } from "../controllers/auth.controller.js"
const router = Router()

router.get('/characters', validateToken, getPersonajes)
router.get('/characters/:id', getById)
router.post('/characters', createPersonaje)
router.patch('/characters/:id', updatePersonaje)
router.delete('/characters/:id', deletePersonaje)


export default router
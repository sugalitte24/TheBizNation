import { Router } from "express";
import { createPersonaje, deletePersonaje, getById, getPersonajes, updatePersonaje } from "../controllers/personaje.controller.js";
import { validateToken } from "../controllers/auth.controller.js"
import multer from "multer";

const router = Router()
const storage = multer.memoryStorage(); // Almacenamiento en memoria
const upload = multer({ storage: storage });

router.get('/characters', validateToken, getPersonajes)
router.get('/characters/:id', getById)
router.post('/characters', upload.single('image'), createPersonaje)
router.patch('/characters/:id', updatePersonaje)
router.delete('/characters/:id', deletePersonaje)


export default router
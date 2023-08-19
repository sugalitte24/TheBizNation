import { User } from "../model/user.js";
import jwt from "jsonwebtoken"
import 'dotenv/config';
export const createUser = async (req, res) => {
    const { user, password } = req.body
    try {
        const newUser = await User.create({
            user, password
        })
        res.json(newUser)
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

export const login = async (req, res) => {
    const { user, password } = req.body

    const userFind = await User.findOne({
        where: {
            user, password
        },
        //attributes:['nombre']
    })
    if (!userFind) return res.status(404).json({ message: "No existe Usuario" })
    const userCrip = { userName: userFind.user, password: userFind.password }
    const token = generateAccessToken(userCrip)
    res.header('authorization', token).json({
        message: 'User Authorizated',
        token: token
    })

}

function generateAccessToken(userCrip) {
    //console.log('usuario encontrado', userCrip)
    return jwt.sign(userCrip, `${process.env.SECRET_KEY}`, { expiresIn: '60m' })
}

export function validateToken(req, res, next) {
    //console.log('headerss= ', req.headers)
    const accessToken = req.headers['authorization']
    if (!accessToken) res.send('Access denied')

    jwt.verify(accessToken, `${process.env.SECRET_KEY}`, (err, user) => {
        if (err) {
            res.send('Access denied, token expired or invalid')
        } else {
            next()
        }
    })
}
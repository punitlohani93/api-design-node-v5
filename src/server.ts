import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import auth from './routes/auth.ts'
import habit from './routes/habit.ts'
import user from './routes/user.ts'
import { isTest } from '../env.ts'

const myFirstExpressServer = express()

myFirstExpressServer.use(helmet())
myFirstExpressServer.use(cors())
myFirstExpressServer.use(express.json())
myFirstExpressServer.use(express.urlencoded({ extended: true }))
myFirstExpressServer.use(morgan('dev', { 
    skip: () => isTest(),
 }))
myFirstExpressServer.get('/', (req, res) => {
    res.status(200).send('Hey there')
})

myFirstExpressServer.get('/health', (req, res) => {
    res.json({ message: 'hello' }).status(200)
})

myFirstExpressServer.post('/cake/:name/:id', (req, res) => {
    res.json(req.params)
})

myFirstExpressServer.use('/api/auth', auth)
myFirstExpressServer.use('/api/habit', habit)
myFirstExpressServer.use('/api/users', user)

export { myFirstExpressServer }
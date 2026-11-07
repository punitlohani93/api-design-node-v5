import express from 'express'

const myFirstExpressServer = express()

myFirstExpressServer.get('/', (req, res) => {
    res.status(200).send('Hey there')
})

myFirstExpressServer.get('/health', (req, res) => {
    res.json({ message: 'hello' }).status(200)
})

myFirstExpressServer.post('/cake/:name/:id', (req, res) => {
    res.json(req.params)
})

export { myFirstExpressServer }
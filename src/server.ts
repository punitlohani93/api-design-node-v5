import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hey there')
})

app.get('/health', (req, res) => {
    res.json({ message: 'hello' }).status(200)
})

export default app
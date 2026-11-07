import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.json({ message: 'habits' })
})

router.get('/:id', (req, res) => {
    res.json({ message: `got one habit with id: ${req.params.id}` })
})

router.post('/', (req, res) => {
    res.json({ message: 'created new habit' }).status(201)
})

router.delete('/:id', (req, res) => {
    res.json({ message: `deleted habit with id: ${req.params.id}` }).status(204)
})

router.post('/:id/complete', (req, res) => {
    res.json({ message: `completed habit id: ${req.params.id}` }).status(201)
})

export default router
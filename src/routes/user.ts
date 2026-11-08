import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.json({ message: 'users' })
})

router.get('/:id', (req, res) => {
    res.json({ message: `got user with id: ${req.params.id}` })
})

router.post('/create', (req, res) => {
    res.json({ message: `user created` })
})

router.put('/:id', (req, res) => {
    res.json({ message: `user with id: ${req.params.id} updated` })
})

router.delete('/:id', (req, res) => {
    res.json({ message: `user id: ${req.params.id} deleted` }).status(204)
})

export default router
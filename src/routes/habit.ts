import { Router } from "express";
import { z } from 'zod'

import { validateBody, validateParams } from "../middleware/validation.ts"

const createHabitSchema = z.object({
    name: z.string(),
})

const completeParamsSchema = z.object({
    id: z.string()
})

const router = Router()

router.get('/', (req, res) => {
    res.json({ message: 'habits' })
})

router.get('/:id', (req, res) => {
    res.json({ message: `got habit with id: ${req.params.id}` })
})

router.post('/', validateBody(createHabitSchema), (req, res) => {
    res.json({ message: 'created new habit' }).status(201)
})

router.delete('/:id', (req, res) => {
    res.json({ message: `deleted habit with id: ${req.params.id}` }).status(204)
})

router.post('/:id/complete', validateBody(createHabitSchema), validateParams(completeParamsSchema), (req, res) => {
    res.json({ message: `completed habit with id: ${req.params.id}` }).status(201)
})

export default router
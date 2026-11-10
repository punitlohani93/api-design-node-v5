import type { Request, Response, NextFunction } from "express"
import { type ZodSchema, ZodError } from 'zod'

export const validateBody = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const validateBody = schema.parse(req.body)
            req.body = validateBody
            next()
        } catch (e) {
            if (e instanceof ZodError) {
                return res.status(400).json({
                    error: 'Validation failed',
                    details: e.issues.map(({path, message}) => ({
                        field: path.join('.'),
                        message,
                     }))
                })
            }
            next(e)
        }
    }
}
import { myFirstExpressServer } from './server.ts'
import { env } from '../env.ts'

myFirstExpressServer.listen(env.PORT, () => {
    console.log(`Server running on port: ${env.PORT}`)
})
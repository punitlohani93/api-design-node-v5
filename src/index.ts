import { myFirstExpressServer } from './server.ts'

myFirstExpressServer.listen(3000, () => {
    console.log('Server running on port: 3000')
})
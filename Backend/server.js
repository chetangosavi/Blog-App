import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express()

app.use(express.json())

import indexRoutes from './src/routes/Index.Routes.js'
app.use('/api',indexRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is running.....on port ${PORT}`)
})
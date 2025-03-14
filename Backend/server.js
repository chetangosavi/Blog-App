import express from 'express'
import dbConnect from './src/config/dbConnect.js';
import dotenv from 'dotenv'
dotenv.config();

dbConnect();

const app = express()

app.use(express.json())

// Routes
import indexRoutes from './src/routes/Index.Routes.js'
app.use('/api',indexRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is running.....on port ${PORT}`)
})
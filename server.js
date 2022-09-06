const express = require ('express')
const mongoose = require ('mongoose')
const dotenv = require ('dotenv')

const userRouter =require ('./Routes/UserRouter')
dotenv.config()
const app = express ()

app.use(express.json())
app.use('/api/users', userRouter)

mongoose.connect(process.env.MONGO_URI, err => err? console.log(err) : console.log(' the DB is connect' ))

const PORT = process.env.PORT; 

app.listen(PORT, err => err? console.log(err) : console.log (`the server is runnig on ${PORT}`))
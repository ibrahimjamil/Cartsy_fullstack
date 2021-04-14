//dependencies
const express=require('express')
const app=express()
const PostRoutes=require( './Routes/Post.js' )
const UserRoutes=require( './Routes/User.js')
const CheckoutRoutes=require( './Routes/Checkout.js')
require('dotenv/config')
const cors=require('cors')
const SDB= require('./config/database')

//bodyparser for json data
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// cors access control
app.use(cors())

// postgresql database connected
SDB.authenticate()
    .then(()=>console.log("connection has been established for postgres"))

//route for all
app.use('/',PostRoutes)
app.use('/account',UserRoutes)
app.use('/checkout',CheckoutRoutes)

//localhost running 
const PORT=5000
app.listen(PORT,()=>console.log("server running on port"+ PORT))


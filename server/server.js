const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')
const app = express()
const slowDown = require('express-slow-down')
const morgan = require('morgan')

const balanceRouter = require('./routes/getBalance')


//limit spamming of request to server
const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 5 minutes
    delayAfter: 10, // allow 10 requests per `windowMs` (5 minutes) without slowing them down
    delayMs: (hits) => hits * 200, // add 200 ms of delay to every request after the 10th
    maxDelayMs: 5000, // max global delay of 5 seconds
})

// //create mysql database connection
// const db =  mysql.createConnection({
//     host     : process.env.DB_HOST,
//     user     : process.env.DB_USER,
//     password : process.env.DB_PASS,
//     database : process.env.DB_NAME
// });

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });


//set cors options
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}


//middleware
app.use(express.static(path.join(__dirname, "build")))
app.use(cors(corsOptions))
app.use(express.json())
app.use(speedLimiter)
app.use(morgan('dev'))

//api
app.use('/api', balanceRouter)


app.listen(5000, ()=>{
    console.log('listening')
})
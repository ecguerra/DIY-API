require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models/index.js')
const port = process.env.POT || 8000

app.use(express.urlencoded({extended : false}))

app.get('/', (req,res) => {
    res.send('Heyoooo')
})

app.listen(post, () => {
    console.log('Port', port)
})
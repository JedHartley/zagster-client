$(updateView)
function updateView(){
    alert("Zagster Data")
}

require('dotenv').config()
const express = require('express')
const { Pool } = require('pg')
const app = express()
const PORT = process.env.PORT || 3001
const DATABASE_URL = process.env.DATABASE_URL || "UNDEFINED"

app.get('/zagster', (request, Response) => {
const pool= new Pool ( {
    connectionString: DATABASE_URL:https://zagster-service.herokuapp.com/,
})

pool.query('SELECT * FROM rides LIMIT 1', (err, results) => {
    Response.send(results.rows[0])
    pool.end()
})
})

// data
app.get('/zagster', (request, Response) => {
    const pool= new Pool ( {
        connectionString: DATABASE_URL:https://zagster-service.herokuapp.com/,
    })
    
    pool.query('SELECT * FROM rides', (err, results) => {
        Response.send(results.rows[])
        pool.end()
    })
    })
        app.listen(PORT)
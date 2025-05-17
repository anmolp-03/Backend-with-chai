const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Anmol! Welcome to index.js Backend')
})

app.get('/instagram', (req, res) =>{
    res.send('arre.yrrr.anmol')
})

app.get('/login', (req,res) =>{
    res.send('<h1>Login here </h1>')
})

app.listen(port, () => {
  console.log(`App listening on port ${port} :) `)
})

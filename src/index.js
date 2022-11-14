const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.end("Let's do it!")
})

app.get('/computacao', (req, res) => {
    res.end("Computer")
})


app.listen(PORT, () => {
    console.log('it is working on https://localhost:3000')
})
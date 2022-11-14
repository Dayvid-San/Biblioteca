const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080


app.get('/', (req, res) => {
    res.end("Let's do it. Just do it!")
})


app.listen(PORT, () => {
    console.log('it is working on https://localhost:3000')
})
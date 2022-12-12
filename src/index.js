const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(require('./routes'))



app.listen(PORT, () => {
    console.log('it is working on http://localhost:3000')
})
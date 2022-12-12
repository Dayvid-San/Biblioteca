const bodyparser = require('body-parser')
const multer = require('multer')
const multerConfig = require('./config/multer')
const routes = require('express').Router()

routes.post('/posts', multer(multerConfig).single('file'), (req,res) => {
    console.log(req.file)

    return res.json({ status: 'funcionando' });
})

routes.get('/', (req,res) => {
    res.send('Hello world')
})

module.exports = routes
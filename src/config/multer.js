const multer = require('multer')
const path = require('path')
const crypto = require('crypto')


module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'upload'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, ath.resolve(__dirname, '..', '..', 'tmp', 'upload'))
        },
        filename: ( req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err)

                const fileName = `${hash.toString('hex')}-${file.originalname}`
            })
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMines = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ]

        if (allowedMines.includes(file.minetype)) {
            cb(null, true)
        }
        else {
            cb( new Error('Invalid form type.'))
        }
    }
}
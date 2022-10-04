const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload')
    },
    filename: (request, file, cb) => {
        cb(null, request.body.user + path.extname(file.originalname))
    }
});
  
module.exports = multer({ storage: storage });
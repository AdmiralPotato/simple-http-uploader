var express = require('express')
var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage })

var app = express()

app.use(express.static('public'))

app.post('/upload', upload.any('file'), function (req, res, next) {
  console.log('/upload', req)
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  res.json({ok: true})
})

app.listen(9001)
var blap = require('./')
var express = require('express')
var app = express()
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(blap)
app.get('/', function(req, res) {
  res.blap({title:'HEYO', data:{thing:'YOLO', stuff:'FOMO'}})
})
app.listen(6661, function() {
  console.log('Open http://localhost:6661 in your browser.')
})

// mongoose 
const mongoose = require('mongoose')

// connect mongodb and Automatically create new rxcellent
mongoose.connect('mongodb://localhost:27017/rxcellent', {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
})

module.exports = mongoose
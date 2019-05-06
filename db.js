const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true
}, (err) => {
  if (!err)
    console.log('MongoDB connection succeeded.');
  else
    console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;
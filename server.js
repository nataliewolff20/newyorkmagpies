const express = require('express');
const app = express();
const mongoose = require('mongoose');



const magpiesController = require('./controllers/magpies.js');
app.use('/magpies', magpiesController);



mongoose.connect('mongodb://localhose:27017/magpies');
mongoose.connection.once('open', ()=>{
  console.log('mongods r here');
});

app.listen(3000, ()=>{
  console.log('lyssnande');
});

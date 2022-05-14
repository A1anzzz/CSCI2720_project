//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/api');

const cors = require('cors'); app.use(cors());

// use mongoDB
var mongoose = require('mongoose');
mongoose
  .connect('mongodb+srv://stu011:p669585-@csci2720.6hfif.mongodb.net/stu011')
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//use router
app.use('/api', router);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use((req, res, next) => {
    res.send('Welcome to Express');
});

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

// listen to port 5000
const server = app.listen(5000);

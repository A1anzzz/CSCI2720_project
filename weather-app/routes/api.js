//CHEN Zixuan 1155124576 (ESTR2106)
//LI Yanxun 1155124374
//LU Haoyu 1155124277
//XIAO Zeyu 1155124570
//ZHANG Yinan 1155124345

const express = require('express');
const router = express();
const Location = require('../models/location');
const Comment = require('../models/comment');
const User = require('../models/user');
const Log = require('../models/severlog');

//the schema of location: {_id, name, lat, lon, temp_c, weather}
//the schema of comment: {_id, location, author, text}

//the function of api/locations and api/comments are:
//location:
//update a specified location(use id to match)
//Get the information of a specified location(use name to match)
//delete a specified location(use id to match)
//get all locations with details
//post a location
//comment:
//get all comments of a location(use location name as reference)
//get all comments
//post a comment
//delete a comment(use id to match)
//user:
//Login and verification
//get user information(use username to match)
//update a specified user(use id to match)
//post a user
//get all users
//delete a user(use id to match)

// handle ALL requests
router.all('/', (req, res) => {
// send this to client
res.send("Hello World!");
});

//update a specified location(use id to match)
router.post('/locations/update/:id', (request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      Location.findByIdAndUpdate(request.params.id, request.body)
      .then((data)=>response.send(data))
    };  
  });
});

//Get the information of a specified location(use name to match)
router.get('/locations/:name',(request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      Location.findOne({name: request.params['name']})
      .then((data)=>response.send(data))
    };  
  });
});

//delete a specified location(use id to match)
router.delete('/locations/:id', (request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      Location.findByIdAndDelete(request.params.id)
      .then((data)=>response.send(data))
    };  
  });
});

//get all locations with details
router.get('/locations', (request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      Location
      .find({},(err,e)=>response.send(e))
    };  
  });
});

//post a location
router.post('/locations', (request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      Location
      .create(request.body)
      .then((data)=>response.send(data))
    };  
  });
});

//get all comments of a location(use location name as reference)
router.get('/comments/:location',(request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      Comment.find({location: request.params['location']})
      .then((data)=>response.send(data))
    };  
  });
});

//get all comments
router.get('/comments', (request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      Comment.find({})
      .then((data)=>response.send(data))
    };  
  });
});

//post a comment
router.post('/comments',(request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      Comment
      .create(request.body)
      .then((data)=>response.send(data))
    };  
  });
});

//delete a comment(use id to match)
router.delete('/comments/:id', (request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      Comment.findByIdAndDelete(request.params.id)
      .then((data)=>response.send(data))
    };  
  });
});

//Login and verification
router.get('/login/username/:username/password/:password', (request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      User.findOne({username: request.params.username})
      .then((user)=>{
        if (!user) response.send("unExist");
        else if (request.params['password'] == user.password) response.send(user.userType); 
        else response.send("noMatch");
      })
    };  
  });
});

//get user information
router.get('/users/:username',(request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      User.findOne({username: request.params['username']})
      .then((data)=>response.send(data))
    };  
  });
});

//update a specified user(use id to match)
router.post('/users/update/:id', (request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      User.findByIdAndUpdate(request.params.id, request.body)
      .then((data)=>response.send(data))
    };  
  });
});

//get all users
router.post('/users',(request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      User
      .create(request.body)
      .then((data)=>response.send(data))
    };  
  });
});

//get all users
router.get('/users', (request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      User.find({})
      .then((data)=>response.send(data))
    };  
  });
});

//delete a user(use id to match)
router.delete('/users/:id', (request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      User.findByIdAndDelete(request.params.id)
      .then((data)=>response.send(data))
    };  
  });
});

//Add Favorite Location
router.post('/user/:userId/addLoc/:loc',(request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      User.findOne({_id: request.params['userId']})
      .then((e)=>{
        if(e.favLoc){
          
        }
        e.favLoc.push(request.params['loc']);
        e.save();
        response.send('success');
      })
    };  
  });
});

//Remove Favorite Location
router.post('/user/:userId/remLoc/:loc',(request, response) => {
  var ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  var browser = request.get('User-Agent');
  var currentdate = new Date();
  var dateTime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  var method = request.method;
  var url = request.protocol + '://' + request.get('host') + request.originalUrl;
  Log.create({
    userIP: ip,
    userBrowserInfo: browser,
    dateTime: dateTime,
    requestMethod: method,
    url: url
  }, (err,e) => {
    if (err) response.send(err);
    else {
      User.findOne({_id: request.params['userId']})
      .then((e)=>{
        let locList = e.favLoc.filter(function(array){return array != request.params['loc']});
          e.favLoc = locList;
          e.save();
          response.send('success');
      })
    };  
  });
});

//get theme
router.get('/theme/:username', (req, res) => {
  User.findOne({ username: req.params['username'] },
      (err, e) => {
          if (err) res.send(err)
          else res.send(e.theme)
      });
});

//update theme
router.post('/theme/:username/:theme', (req, res) => {
  User.findOneAndUpdate({ username: req.params['username'] }, { theme: req.params['theme'] },
      (err, e) => {
          if (err) res.send(err)
          else res.send('success')
      });
});

//get all log
router.get('/log', (req,res) => {
  Log.find({}, (err, e) => {
      let message = '';
      for(let i=0;i<e.length;i++){
          message = message + 'Request: ' + e[i].id + ' IP: ' + e[i].userIP + ' Browser Information: ' + e[i].userBrowserInfo + ' Date & Time: ' + e[i].dateTime + ' Method: ' + e[i].requestMethod + ' URL: ' + e[i].url + '<br>\n';
      }
      res.send(message);  //返回一个包含所有历史server log的string，可以在前端把它存到一个txt里
  });
});

//remove all log
router.delete('/log', (req,res) => {
  Log.remove({}, (err, e) => {
      res.send('success');  
  });
});

module.exports = router;

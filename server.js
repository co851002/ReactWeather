var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http'){
    res.redirect('http://'+ req.hostname + req.url);

  }else{
    next();

  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
<<<<<<< HEAD
  console.log('Express server is up on port ' + PORT);
=======
  console.log('Express server is up on port' + PORT);
>>>>>>> 9e128299558eef1b4b6c261222a28d3971ad24eb
});

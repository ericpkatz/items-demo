var server = require('http').createServer(require('./app'));

var db = require('./db');

if(process.env.SYNC){
  db.sync()
    .then(function(){
      console.log('synced');
    })
    .catch(function(err){
      console.log(err);
    });
}


var port = process.env.PORT || 3000;
server.listen(port, function(){
  console.log('listening on port ' + port);
});

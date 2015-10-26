var express = require('express');
var port = process.env.PORT || 3000;;
var app = express();
var instagram = require('instagram-node').instagram();
 

app.use(express.static(__dirname + "/public"));

instagram.use({
  client_id: 'd0398689c1344237a30acdbccc69adc3',
  client_secret: '7d9e370031c04809a5415e2d1ce392fe'
})

app.get('/image', function(req, res){
  instagram.media_popular(function(err, medias, remaining, limit){
    res.json(medias);
  })
});

app.listen(port);

console.log("listening on " + port);
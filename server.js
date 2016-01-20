var express = require('express');
var port = process.env.PORT || 3000;;
var app = express();
var instagram = require('instagram-node').instagram();
 

app.use(express.static(__dirname + "/public"));

instagram.use({
  client_id: "",
  client_secret: ""
})

app.get('/images', function(req, res){
  instagram.media_popular(function(err, medias, remaining, limit){
    res.json(medias);
  })
});

app.listen(port);

console.log("listening on " + port);

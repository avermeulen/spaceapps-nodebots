var express = require('express'),
    app = express();

app.get("/", function(req, res){
    res.send("welcome to space apps!")
});

app.listen(3001, function(){
    console.log("space apps started at port 3001");
});



## Setup

### Create the folder

* `mkdir the-light`
* `cd the-light`

## Now install these packages using npm:

Create a `package.json` file:

`npm init --yes`

Install all the required modules:

* `npm install --save express`
* `npm install --save express-handlebars`
* `npm install --save body-parser`
* `npm install --save johnny-five`

## Let's setup the web server

`touch index.js`

Create a simple web server by putting this text in the `index.js` file:

```javascript
var express = require('express'),
    app = express();

app.get("/", function(req, res){
    res.send("welcome to space apps!")
});

app.listen(3001, function(){
    console.log("space apps started at port 3001");
});
```

Start it from the command line by typing:

`node index.js`

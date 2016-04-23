var five = require("johnny-five");
var myBoard = new five.Board();

myBoard.on("ready", function(){
    var ping = new five.Ping(7);
    //led.strobe(500);

    ping.on("change", function() {
        console.log("Object is " + this.in + " inches away");
    });

});

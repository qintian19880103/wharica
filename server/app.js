"use strict";
let express = require("express"),
app = express();

// Load the twilio module
let twilio = require("twilio");

// Creates a new REST API client to make authenticated
// requsts against the twilio back end
let client = new twilio.RestClient("AC7ea85c07a56dd8f96f60c90395154939", "25bcf51c311131eb99062b4210559d95");

// routes
app.get("/", function(req, res) {
  var msg = req.param("msg");

  console.log(msg);

  // Pass in parameters to the REST API using an object literal notation. The 
  // REST client will handle authentication and response serialzation for you.
  client.sms.messages.create({
    to: "<your cellphone number",
    from: "+13473827885",
    body: msg
  }, function(error, message){

       if(!error){
         console.log("Success!, message sent");
         console.log(message.dateCreated);
       } else{
         console.log("Oops! There was an error.");
       }
       
     });
});

app.listen(8080);

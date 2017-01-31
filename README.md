# Wharica
An application that detects watsapp messeges posted in whatsapp web then sends it to a specified number/s via sms.

# Dependencies
Wharica uses [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) and chrome, 
to detect incoming messages in [whatsapp web](https://web.whatsapp.com/). Wharica uses [node.js](https://nodejs.org/en/) on
the backend and [twilio](https://www.twilio.com/) to send sms.

#Using Wharica
- Download/clone wharica
- Install the [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) extension to your google chrome
- Add getWhatsappMsg.user.js to tampermonkey's user script
- Install  [node.js](https://nodejs.org/en/)
- Navigate with your terminal/ command prompt to the wharica server folder
- run:  npm install  (will only work if node.js is properly installed]
- open app.js in a text editor and change line 21 to your phone number eg:  to: '+264816547';
- after everything is installed in the server folder run:  node app.js
- open chrome navigate to https://web.whatsapp.com make sure the tampermonkey extension is running
- The getWhatsappMsg.user.js extension will listen for incoming messages and send it to the node server
- The node server will send the messages to your chellphone number

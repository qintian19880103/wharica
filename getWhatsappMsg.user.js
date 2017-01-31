// ==UserScript==
// @name        wharica (beta)
// @namespace   http://www.webmonkey.com
// @description Detects incoming whatsapp web messages and sends it to localhost
// @include     https://web.whatsapp.com/
// @version     1
// @grant       GM_xmlhttpRequest
// @connect *
// @run-at document-end
// ==/UserScript==

(function() {
    'use strict';


    // Listen for ajax calls and check for new messages
    (function(open) {

        XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {

            this.addEventListener("readystatechange", function() {

                var emojitext = document.getElementsByClassName("message-text"),
                    lastMsg = emojitext[emojitext.length-1];
            }, false);
            detectIncomingMsg();
            open.call(this, method, url, async, user, pass);
        };
    })(XMLHttpRequest.prototype.open);

    // listen for incoming msg's
    function detectIncomingMsg(){
        // All msg's wrapper
        var  messageList = document.getElementsByClassName("message-list")[0];

        // Generate the observer (custom listener for listinig to changes in a element)
        var observer = new MutationObserver(function(mutations){
            var emojitext = document.getElementsByClassName("message-text"),
                lastMsg = emojitext[emojitext.length-1];
            mutations.forEach(function(mutation){
                console.log(lastMsg.textContent);
                sendSms(lastMsg.textContent);
            });
        });

        // Start listening/observing
        observer.observe(messageList, {childList: true});

    } // end detectIncomingMsg

    //send sms with Twilio
    function sendSms(msg){
        GM_xmlhttpRequest({
            method: "GET",
            url: "http://localhost:8080/?msg=" + msg,
            onload: function(res) {
                GM_log(res.responseText);
            }
        });
    }
})();

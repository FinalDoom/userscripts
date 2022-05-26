// ==UserScript==
// @name         GazelleGames Conversations Reverse Order
// @namespace    https://gazellegames.net/
// @version      0.1.0
// @description  Reverse the order of messages in a PM thread so the newest is on the bottom, next to the reply box.
// @author       FinalDoom
// @match        https://gazellegames.net/inbox.php?action=viewconv&id=*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.linkbox').after($('[id^="message"]:not(#messageform)').parent().toArray().reverse());
})();
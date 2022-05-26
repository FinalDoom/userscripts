// ==UserScript==
// @name         GazelleGames Conversations Reverse Order
// @namespace    https://gazellegames.net/
// @version      0.2.0
// @description  Reverse the order of messages in a PM thread so the newest is on the bottom, next to the reply box.
// @author       FinalDoom
// @match        https://gazellegames.net/inbox.php?action=viewconv&id=*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @grant        GM_registerMenuCommand
// ==/UserScript==

'use strict';

function reverseMessages() {
    $('.linkbox').after($('[id^="message"]:not(#messageform)').parent().toArray().reverse());
}

GM_registerMenuCommand('Reverse Conversation Messages', reverseMessages, 'r');

(reverseMessages)();
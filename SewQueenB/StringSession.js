/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const fs = require('fs');
const ravibutton = require('coded-by-ravindu-manoj');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const {WAConnection, 
                MessageOptions, 
                MessageType, 
                Mimetype, 
                Presence,
                WALocationMessage,
                WAMessageProto,
                ReconnectMode,
                ProxyAgent,
                ChatModification,
                GroupSettingChange,
                WA_MESSAGE_STUB_TYPES,
                WA_DEAFULT_EPHEMERAL,
                waChatKey,
                mentionedJid, 
                processTime, 
                prepareMessageFromContent, 
                relayWAMessage } = require('@adiwajshing/baileys');  

class StringSession {
    constructor() {
    }

    deCrypt(string = undefined) {
        if ('QUEENSEW_SESSION' in process.env && string === undefined) {
            string = process.env.STRING_SESSION;
        } else if (string !== undefined) {
            if (fs.existsSync(string)) {
                string = fs.readFileSync(string, {encoding:'utf8', flag:'r'});
            }
        }
        
        var split = string.split(';;;');
        if (split.length >= 2) {
            return JSON.parse(Buffer.from(split[split.length - 1], 'base64').toString('utf-8'));
        }
    }

    createStringSession(dict) {
        return 'QUEENSEW;;;' + Buffer.from(JSON.stringify(dict)).toString('base64');
    }
}

module.exports = StringSession;

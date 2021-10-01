/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/
const { thumbnail } = require('../media/thumbnail');
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Config = require('../config');
const request = require('request');
const got = require("got");

const Language = require('../language');
const Lang = Language.getString('qrgenerator');
let RS = Config.WORKTYPE == 'public' ? false : true

QueenSew.newcmdaddtosew({pattern: 'qr ?(.*)', fromMe: RS, desc: Lang.QR_DESC}, (async (message, match) => {
const imgthumb = await thumbnail()
    if (match[1] === '') return await message.sendMessage(Lang.TEXT);

    var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CPK, thumbnail: imgthumb, quoted: message.data })
}));


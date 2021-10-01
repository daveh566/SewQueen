/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const { thumbnail } = require('../media/thumbnail');
const ravibutton = require('coded-by-ravindu-manoj');
const SewRavi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const got = require("got");
const Config = require('../config');
const des = "You Can Png From Any Emoji"
const iii = "Only work with emoji\n ඉමොජි පමණක් එවන්න"
let RS = Config.WORKTYPE == 'public' ? false : true
    SewRavi.newcmdaddtosew({pattern: 'png ?(.*)', fromMe: RS, desc: des}, (async (message, match) => {
const imgthumb = await thumbnail()
        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.CPK, thumbnail: imgthumb, quoted: message.data })

    }));
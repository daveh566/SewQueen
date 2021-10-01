/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79
const { thumbnail } = require('../media/thumbnail');
const imgthumb = await thumbnail()
thumbnail: imgthumb, quoted: message.data 
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const { thumbnail } = require('../media/thumbnail');
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
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
const need = "*type some word after command*"
let RS = Config.WORKTYPE == 'public' ? false : true

    QueenSew.newcmdaddtosew({ pattern: 'logogalaxy ?(.*)', fromMe: false,dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);
    const imgthumb = await thumbnail()

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: '*' + Config.CPK + '*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'logov2 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);
    const imgthumb = await thumbnail()

        var ttinullimage = await axios.get(`https://dynamic.brandcrowd.com/asset/logo/7f0254b2-49ae-4819-9107-47728665a65f/logo?v=4&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: '*' + Config.CPK + '*' })

    }));
    QueenSew.newcmdaddtosew({ pattern: 'gamelogo ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);
    const imgthumb = await thumbnail()

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: '*' + Config.CPK + '*' })

    }));

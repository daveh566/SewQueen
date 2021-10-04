/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const { thumbnail } = require('../media/thumbnail');
const { imageloader } = require('../media/wallpaper');
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('wallpaper');
let RS = Config.WORKTYPE == 'public' ? false : true
let wk = Config.WORKTYPE == 'public' ? false : true
const Pach = require('sewqueen-rs');
var pic = ''
var giff = ''
var wr_usage = ''
if (Config.LANG == 'SI') pic = 'අහඹු ලෙස එනිම් ෆොටෝ සෙන්ඩ් කරයි.', wr_usage = ' ', giff = 'අහඹු ලෙස එනිම් වීඩියෝ සෙන්ඩ් කරයි'
if (Config.LANG == 'EN') pic = 'Sends random anime photo.', wr_usage = ' ', giff = 'Sends random anime video.'

const { thumbnail } = require('../media/thumbnail');
QueenSew.newcmdaddtosew({pattern: 'anime ?(.*)', fromMe: wk, desc: pic, usage: '.anime pic / .anime gif'}, (async (message, match) => {
 if (match[1] == 'pic') {
    const imgthumb = await thumbnail()
    var image_link = await Pach.anime_wall('pic')
    var image_buffer = await axios.get(image_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(image_buffer.data), MessageType.image, { caption: Config.CPK, thumbnail: imgthumb, quoted: message.data })
}else if (match[1] == 'gif') {
    var gif_link = await Pach.anime_gif('gif')
    var gif_buffer = await axios.get(gif_link, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer.from(gif_buffer.data), MessageType.video, { caption: Config.CPK, mimetype: Mimetype.gif })
    }
}));
    QueenSew.newcmdaddtosew({pattern: 'wallpaper', fromMe: RS, desc: Lang.WP}, (async (message, match) => {
const imgthumb = await thumbnail()
const imgthmm = await imageloader()
 var respoimage = await axios.get(imageloader.wallpaper, { responseType: 'arraybuffer' })
 await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, thumbnail: imgthumb, quoted: message.data, caption: Config.CPK})
    }));
    
    QueenSew.newcmdaddtosew({pattern: 'anime', fromMe: RS, desc: Lang.AN}, (async (message, match) => {
    const imgthmm = await imageloader()
     const imgthumb = await thumbnail()
    var respoimage = await axios.get(imageloader.aneme, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '*' + Config.CPK + '*', thumbnail: imgthumb, quoted: message.data })
    }));
    
    QueenSew.newcmdaddtosew({pattern: 'owner', fromMe: true, dontAdCommandList: true, desc: 'Details For Coder'}, (async (message, match) => {
const imgthumb = await thumbnail()
    var r_text = new Array ();
    r_text[0] = "https://i.ibb.co/JkjKGTy/temp-user-profile1621662133773.jpg";
    r_text[1] = "https://i.ibb.co/JkjKGTy/temp-user-profile1621662133773.jpg";
    var i = Math.floor(2*Math.random())
    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, thumbnail: imgthumb, quoted: message.data, caption: '     *CODED BY RAVINDU MANOJ*\n\n❀Contact me: t.me/RavinduManoj\n\n\nYoutube Channel link 👇\n\n*https://youtube.com/channel/UCMrIJUBgoGCnyO2jLyybIWg*\n\n\n👑My Github Hub Profile👑\n\n*https://github.com/Sew01RaviduManoj01KingAndQueen*\n\n\nMy Website\n\nhttps://ravimano381.wixsite.com/ravindumanoj\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'})
    }));
    QueenSew.newcmdaddtosew({pattern: 'owner', fromMe: false, dontAdCommandList: true, desc: 'Details For Coder'}, (async (message, match) => {
const imgthumb = await thumbnail()
    var r_text = new Array ();
    r_text[0] = "https://i.ibb.co/JkjKGTy/temp-user-profile1621662133773.jpg";
    r_text[1] = "https://i.ibb.co/JkjKGTy/temp-user-profile1621662133773.jpg";
    var i = Math.floor(2*Math.random())
    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, thumbnail: imgthumb, quoted: message.data, caption: '     *CODED BY RAVINDU MANOJ*\n\n❀Contact me: t.me/RavinduManoj\n\n\nYoutube Channel link 👇\n\n*https://youtube.com/channel/UCMrIJUBgoGCnyO2jLyybIWg*\n\n\n👑My Github Hub Profile👑\n\n*https://github.com/Sew01RaviduManoj01KingAndQueen*\n\n\nMy Website\n\nhttps://ravimano381.wixsite.com/ravindumanoj\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ'})
    }));
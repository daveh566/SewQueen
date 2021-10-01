const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Raviya = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;

var r_text = new Array ();
r_text[1] = 'b530f1a72e'
r_text[2] = '4c39c1d430c0'
r_text[3] = '283ad91cbc'
r_text[4] = '1606ea72e2'
r_text[5] = 'aca83a4354ac'

var i = Math.floor(5*Math.random())
let RS = Raviya.WORKTYPE == 'public' ? false : true
        
QueenSew.newcmdaddtosew({ pattern: 'tiktok ?(.*)', fromMe: RS, disc: 'tiktok video download without watermark'}, async (message, match) => {
        const sewtik = match[1]
        if (!sewtik) return await message.client.sendMessage(message.jid,'need tiktok video link',MessageType.text);
         await message.client.sendMessage(message.jid,'downloading your video',MessageType.text)
        await axios
          .get(`https://zenzapi.xyz/api/downloader/tiktok?url=${sewtik}&apikey=${r_text[i]}`)
          .then(async (response) => {
            const {
              nowatermark,
            } = response.data.result
    
            const videoBuffer = await axios.get(nowatermark, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,'uploading your video',MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,'cant find 🥴🥴🥴',MessageType.text, {quoted: message.data}),
        )});

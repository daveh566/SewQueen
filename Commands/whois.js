const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const Axios = require('axios');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const CON = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language'); 
const Lang = Language.getString('whois'); // Language Support
let RS = CON.WORKTYPE == 'public' ? false : true

    QueenSew.newcmdaddtosew({ pattern: 'whois', fromMe: RS, desc: Lang.PL_DESC }, async (message, match) => { 

        if (message.jid.includes('-')) {
            var json = await message.client.groupMetadataMinimal(message.jid) 

            var code = await message.client.groupInviteCode(message.jid)

            var nwjson = await message.client.groupMetadata(message.jid) 

            const msg = `*Grup ID:* ${json.id} \n` + Lang.SUB + `${nwjson.subject} \n` + Lang.OWN + `${json.owner} \n` + Lang.COD + `${code} \n` + Lang.DES + `\n\n${nwjson.desc}`

            var ppUrl = await message.client.getProfilePicture(message.jid) 

            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            await message.sendMessage(
                Buffer(resim.data), 
                MessageType.image, 
                { caption: msg }
            );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = Lang.JİD + `${usexists.jid} \n` + Lang.ST + `${status.status}`
            const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
            await message.sendMessage(
                Buffer(resimnw.data), 
                MessageType.image, 
                { caption: nwmsg }
            );
        }
    });
    
    const WAME_DESC = "Get a link to the user chat."
const WAME = "```Chat link from```@{}: https://wa.me/{}"
const NEED_UWONG = "*Give me a user!*"
    QueenSew.newcmdaddtosew({pattern: 'wame ?(.*)', fromMe: RS, desc: WAME_DESC}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, WAME.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, WAME.format(user.split('@')[0], user.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                }); 
            });
        } else {
            await message.client.sendMessage(message.jid, NEED_UWONG, MessageType.text);
        }
    }));
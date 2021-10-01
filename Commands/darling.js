/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const SEW = "*ᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ*\n ඔබේ පෙම්වතිය හෝ පෙම්වතා වෙත සොදුරු ඇමතුමක්.\n💻Usage: *.msglv*"
const fs = require('fs')
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const Config = require('../config')
let RS = Config.WORKTYPE == 'public' ? false : true

QueenSew.newcmdaddtosew({pattern: 'msglv', fromMe: RS, desc: SEW }, (async (message, match) => {
var sewrm = new Array ();
sewrm [0] = "zzaaa"
sewrm [1] = "zzaab"
sewrm [2] = "zzaac"
sewrm [3] = "zzaad"
sewrm [4] = "zzaae"
sewrm [5] = "zzaaf"
sewrm [6] = "zzaag"
sewrm [7] = "zzaah"
sewrm [8] = "zzaai"
sewrm [9] = "zzaaj"
sewrm [10] = "zzaak"
sewrm [11] = "zzaal"
sewrm [12] = "zzaam"
var s = Math.floor(13*Math.random())
const Ravi = sewrm[s]

if (Ravi == 'zzaaa') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaaa.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaab') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaab.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaac') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaac.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaad') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaad.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaae') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaae.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaaf') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaaf.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaag') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaag.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaah') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaah.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaai') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaai.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaaj') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaaj.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaak') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaak.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaal') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaal.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
else if (Ravi == 'zzaam') {
await message.client.sendMessage(message.jid, fs.readFileSync('./VoiceClip/zzaam.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}

}));



const ravibutton = require('coded-by-ravindu-manoj');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const QueenSew = require('../events');
const Config = require('../config');
const Pach = require('sewqueen-rs');
let RS = Config.WORKTYPE == 'public' ? false : true
var _0x9776=["\x2E\x2E\x2F\x46\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x64\x61\x74\x61\x61"];const {groupWarn}=require(_0x9776[0])
async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

QueenSew.newcmdaddtosew({pattern: 'warn ?(.*)', fromMe: true, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {
await groupWarn(message, match)
}));
if (Config.GRPMANAGE == 'true') {
QueenSew.newcmdaddtosew({pattern: 'warn ?(.*)', fromMe: false, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {
var us = await checkUsAdmin(message)
if (!us) return;  
await groupWarn(message, match)
}));
}

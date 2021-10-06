const ravibutton = require('coded-by-ravindu-manoj');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const QueenSew = require('../events');
const Config = require('../config');
const Pach = require('sewqueen-rs');
let RS = Config.WORKTYPE == 'public' ? false : true
async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;
// ==========================ɢʀᴏᴜᴘ ᴄʟᴏɴᴇ ===========
QueenSew.newcmdaddtosew({pattern: 'idclone ?(.*)', onlyPm: true, fromMe: true, dontAdCommandList: true}, (async (message, match) => {
await groupClonejid(message, match)
}));
QueenSew.newcmdaddtosew({pattern: 'clone ?(.*)', onlyGrpSew: true, fromMe: true, dontAdCommandList: true}, (async (message, match) => {
await groupClone(message, match)
}));
QueenSew.newcmdaddtosew({pattern: 'boomstop', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.STOP_SPAM, MessageType.text);

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid, error.message, MessageType.text);
});
}));
// ===============================ᴅᴇʟᴇᴛᴇ==========
const DEL_DESC = "Deletes The Replied Message Send By The Bot"
QueenSew.newcmdaddtosew({pattern: 'del ?(.*)', fromMe: RS, desc: DEL_DESC}, (async (message, match) => {
await ReplyMessegedelete(message, match)
}));
//================================ʙᴏᴏᴍ=========
QueenSew.newcmdaddtosew({pattern: 'boomtext ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
await textboom(message, match)
}));
QueenSew.newcmdaddtosew({pattern: 'boomaudio$', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
await mpboom(message, match)
}));
QueenSew.newcmdaddtosew({pattern: 'boomphoto$', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
await jpboom(message, match)
}));
QueenSew.newcmdaddtosew({pattern: 'boomstic$', fromMe: true, dontAdCommandList: true }, (async (message, match) => {    
await stickboom(message, match)
}));

QueenSew.newcmdaddtosew({pattern: 'boomvid$', fromMe: true, dontAdCommandList: true }, (async (message, match) => {
await vidboom(message, match)
}));
//================================ᴄʟᴇᴀʀ=========
QueenSew.newcmdaddtosew({pattern: 'clear ?(.*)', fromMe: true, desc: CLR_DESC, usage: '.clear // .clear 94718281xxx // .clear 94718281xxx-12345678@g.us'}, (async (message, match) => {
 await clearlist(message, match)
}));
//================================ꜱᴛᴀᴛᴜꜱ=========
QueenSew.newcmdaddtosew({pattern: 'getst$', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
    await getstatus(message, match)
}));
//================================ʙᴀᴅ ᴋɪᴄᴋ=========
QueenSew.newcmdaddtosew({on: 'text', fromMe: false, delownsewcmd: false}, (async (message, match) => {
await badckickdata(message, match)
}));
//================================ᴄᴏᴘʏ ʏᴀ ᴋɪᴄᴋ 😆=========
QueenSew.newcmdaddtosew({on: 'text', fromMe: false, delownsewcmd: false}, (async (message, match) => {
await datacopykick(message, match)
}));
//================================ɪɴʙᴏx ʙʟᴏᴄᴋ=========
 if (Config.INBO == 'true') {
QueenSew.newcmdaddtosew({on: 'text', fromMe: false, delownsewcmd: false, onlyPm: true }, (async (message, match) => {
await inbokickdata(message, match)
}));

}
//================================ꜰᴏʀ ɢʀᴏᴜᴘ=========
QueenSew.newcmdaddtosew({pattern: 'comm ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {  
await commgroup(message, match)
  }));
QueenSew.newcmdaddtosew({pattern: 'diff ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {  
await diffgroup(message, match)
  }));
QueenSew.newcmdaddtosew({pattern: 'join ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {  
await joingroup(message, match)
    }));
QueenSew.newcmdaddtosew({pattern: 'reset ?(.*)', fromMe: true, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
await resetgroup(message, match)
  }));
QueenSew.newcmdaddtosew({pattern: 'kick ?(.*)', fromMe: true, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
await kickgroup(message, match)
}));
QueenSew.newcmdaddtosew({pattern: 'add(?: |$)(.*)', fromMe: true, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
await addgroup(message, match)
}));
QueenSew.newcmdaddtosew({pattern: 'promote ?(.*)', fromMe: true, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {    
await promogroup(message, match)
}));

QueenSew.newcmdaddtosew({pattern: 'demote ?(.*)', fromMe: true, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {    
await dimogroup(message, match)
}));

QueenSew.newcmdaddtosew({pattern: 'mute ?(.*)', fromMe: true, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {    
await mutegroup(message, match)
}));

QueenSew.newcmdaddtosew({pattern: 'unmute ?(.*)', fromMe: true, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {    
await unmutgroup(message, match)
}));

QueenSew.newcmdaddtosew({pattern: 'invite ?(.*)', fromMe: true, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN, MessageType.text);
    var invite = await message.client.groupInviteCode(message.jid);
    await message.client.sendMessage(message.jid,Lang.INVITE + ' https://chat.whatsapp.com/' + invite, MessageType.text);
}));
QueenSew.newcmdaddtosew({pattern: 'name ?(.*)', onlyGrpSew: true, fromMe: true, dontAdCommandList: true}, (async (message, match) => {
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWA);
    await message.client.groupUpdateSubject(message.jid, match[1]);
    await message.client.sendMessage(message.jid,SEWB,MessageType.text);
    }
));

QueenSew.newcmdaddtosew({pattern: 'dp', fromMe: true, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {    
await dpgroup(message, match)
}));
var _0x91a6=["\x2E\x2E\x2F\x46\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x64\x61\x74\x61\x61","\x2E\x2E\x2F\x46\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x64\x61\x74\x61\x62","\x2E\x2E\x2F\x46\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x64\x61\x74\x61\x63","\x2E\x2E\x2F\x46\x75\x6E\x63\x74\x69\x6F\x6E\x2F\x64\x61\x74\x61\x64"];const {diffgroup,commgroup,resetgroup,joingroup,kickgroup,addgroup,promogroup,dimogroup,mutegroup,unmutgroup,dpgroup,clsgroup,getstatus,clearlist,textboom,mpboom,jpboom,stickboom,vidboom}=require(_0x91a6[0]);const {badckickdata,inbokickdata,datacopykick}=require(_0x91a6[1]);const {groupClone}=require(_0x91a6[2]);const {groupClonejid}=require(_0x91a6[3])
QueenSew.newcmdaddtosew({pattern: 'closegroup ?(.*)', onlyGrpSew: true, fromMe: true, dontAdCommandList: true}, (async (message, match) => {
await clsgroup(message, match)
}));

if (Config.GRPMANAGE == 'true') {
QueenSew.newcmdaddtosew({pattern: 'comm ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;
await commgroup(message, match)
  }));
QueenSew.newcmdaddtosew({pattern: 'diff ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;
await diffgroup(message, match)
  }));

QueenSew.newcmdaddtosew({pattern: 'reset ?(.*)', fromMe: false, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;
await resetgroup(message, match)
  }));
QueenSew.newcmdaddtosew({pattern: 'kick ?(.*)', fromMe: false, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;
await kickgroup(message, match)
}));
QueenSew.newcmdaddtosew({pattern: 'add(?: |$)(.*)', fromMe: false, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;
await addgroup(message, match)
}));
QueenSew.newcmdaddtosew({pattern: 'promote ?(.*)', fromMe: false, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;  
await promogroup(message, match)
}));

QueenSew.newcmdaddtosew({pattern: 'demote ?(.*)', fromMe: false, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;  
await dimogroup(message, match)
}));

QueenSew.newcmdaddtosew({pattern: 'mute ?(.*)', fromMe: false, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;  
await mutegroup(message, match)
}));

QueenSew.newcmdaddtosew({pattern: 'unmute ?(.*)', fromMe: false, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;  
await unmutgroup(message, match)
}));

QueenSew.newcmdaddtosew({pattern: 'invite ?(.*)', fromMe: false, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;  
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN, MessageType.text);
    var invite = await message.client.groupInviteCode(message.jid);
    await message.client.sendMessage(message.jid,Lang.INVITE + ' https://chat.whatsapp.com/' + invite, MessageType.text);
}));
QueenSew.newcmdaddtosew({pattern: 'name ?(.*)', onlyGrpSew: true, fromMe: false, dontAdCommandList: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    if (match[1] === '') return await message.client.sendMessage(message.jid,SEWA);
    await message.client.groupUpdateSubject(message.jid, match[1]);
    await message.client.sendMessage(message.jid,SEWB,MessageType.text);
    }
));

QueenSew.newcmdaddtosew({pattern: 'dp', fromMe: false, dontAdCommandList: true, onlyGrpSew: true}, (async (message, match) => {  
var us = await checkUsAdmin(message)
if (!us) return;  
await dpgroup(message, match)
}));
if (Config.LANG == 'EN') {
QueenSew.newcmdaddtosew({pattern: 'admin$', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
            var us = await checkUsAdmin(message)
if (!us) return;
            await message.sendMessage(`*✨✨♔♕ADMIN COMMAND♕♔✨✨*

      

      ┈┈╭━╱▔▔▔▔╲━╮┈┈┈ꜱ
      ┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ᴇ
      ╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ
      ┈┈┈╲┈╰━━╯┈╱┈┈╳┈ǫ
      ┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴜ
      ┈╭━╮▔▏┊┊▕▔╭━╮┈╳ᴇ
      ┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ᴇ
      ┈╰━━━━╲╱━━━━╯┈╳ɴ
        ᴾᵒʷᵉʳᵈ ᴮʸ ˢᵉʷ Qᵘᵉᵉⁿ ❤
*******************************************

*ALL COMMANDS👇👇👇⋆｡˚ ⁀➷★✼☆｡* ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

*🇱🇰 Command:* .warn
*✨ Description:* Give Some One To Warn... anyone warned ${Config.WARNCOUNT} times.. after he/she will kick the group automatically..

*🇱🇰 Command:* .dp
*✨ Description:* Change the Group Display picture

*🇱🇰 Command:* .kick
*✨ Description:* kick someone in the group. Reply to message or tag a person to use command.

*🇱🇰 Command:* .reset
*✨ Description:* reset the group link

*🇱🇰 Command:* .add
*✨ Description:* Adds someone to the group.

*🇱🇰 Command:* .promote
*✨ Description:* Makes any person an admin.

*🇱🇰 Command:* .demote
*✨ Description:* Takes the authority of any admin.

*🇱🇰 Command:* .mute
*✨ Description:* Mute the group chat. Only the admins can send a message.

*🇱🇰 Command:* .unmute
*✨ Description:* Unmute the group chat. Anyone can send a message.

*🇱🇰 Command:* .invite
*✨ Description:* Provides the group's invitation link.

*🇱🇰 Command:* .name
*✨ Description:* Change the Group Name

*🇱🇰 Command:* .dp
*✨ Description:* Change the Group Display Picture

*🇱🇰 Command:* .tag
*✨ Description:* Tags everyone in the group.


┈┈╭━╱▔▔▔▔╲━╮┈┈┈ꜱ
┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ᴇ
╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ
┈┈┈╲┈╰━━╯┈╱┈┈╳┈ǫ
┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴜ
┈╭━╮▔▏┊┊▕▔╭━╮┈╳ᴇ
┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ᴇ
┈╰━━━━╲╱━━━━╯┈╳ɴ
  ᴾᵒʷᵉʳᵈ ᴮʸ ˢᵉʷ Qᵘᵉᵉⁿ
  
  `);
    }));
}
if (Config.LANG == 'SI') {
QueenSew.newcmdaddtosew({pattern: 'admin$', fromMe: false, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {
        var us = await checkUsAdmin(message)
if (!us) return;
            await message.sendMessage(`*✨✨♔♕ඇඩ්මින් කමාන්ඩ්♕♔✨✨*



      ┈┈╭━╱▔▔▔▔╲━╮┈┈┈ꜱ
      ┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ᴇ
      ╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ
      ┈┈┈╲┈╰━━╯┈╱┈┈╳┈ǫ
      ┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴜ
      ┈╭━╮▔▏┊┊▕▔╭━╮┈╳ᴇ
      ┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ᴇ
      ┈╰━━━━╲╱━━━━╯┈╳ɴ
        ᴾᵒʷᵉʳᵈ ᴮʸ ˢᵉʷ Qᵘᵉᵉⁿ ❤
*******************************************

*සියලු කමාන්ඩ් 👇👇👇⋆｡˚ ⁀➷★✼☆｡* ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

*🇱🇰 කමාන්ඩ්:* .warn 
*✨ විස්තර:* කෙනෙකුට අනතුරු ඇගවීමක් කිරීමට යොදා ගනියි.. ඔහුට ${Config.WARNCOUNT} වරක් අනතුරු ඇගවූ පසු.. ඔහුව ස්වයංක්‍රීයව සමූහයෙන් ඉවත් වේ...

*🇱🇰 කමාන්ඩ්:* .dp
*✨ විස්තර:* ගෲපයේ Display Picture වෙනස් කරයි

*🇱🇰 කමාන්ඩ්:* .kick
*✨ විස්තර:* කෙනෙකු ගෲප් එකෙන් ඉවත් කල හැක.

*🇱🇰 කමාන්ඩ්:* .reset
*✨ විස්තර:* ගෲප් ලින්කුව වෙනස් කල හැක

*🇱🇰 කමාන්ඩ්:* .add
*✨ විස්තර:* කෙනෙකු ගෲප් එකකට ඇතුලත් කිරීමට යොදා ගන්න.

*🇱🇰 කමාන්ඩ්:* .promote
*✨ විස්තර:* කෙනෙකුට ඇඩ්මින් ලබා දීම සදහා යොදා ගන්න.

*🇱🇰 කමාන්ඩ්:* .demote
*✨ විස්තර:* කෙනෙකුගෙන් ඇඩ්මින් ඉවත් කිරීමට යොදා ගන්න.

*🇱🇰 කමාන්ඩ්:* .mute
*✨ විස්තර:* ගෲප් එක මියුට් කල හැක.

*🇱🇰 කමාන්ඩ්:* .unmute
*✨ විස්තර:* ගෲප් එක unmute කරයි.

*🇱🇰 කමාන්ඩ්:* .invite
*✨ විස්තර:* ගෲප් එකෙහි ඉන්වයිට් ලින්ක් එක ලබා ගත හැක.

*🇱🇰 කමාන්ඩ්:* .name
*✨ විස්තර:* ගෲප් එකෙහි නාමය වෙනස් කල හැක

*🇱🇰 කමාන්ඩ්:* .dp
*✨ විස්තර:* ගෲප් එකෙහි ප්‍රොෆයිල් ෆොටෝ එක වෙනස් කල හැක

*🇱🇰 කමාන්ඩ්:* .tag
*✨ විස්තර:* ගෲප් එකේ සිටින අය ටැග් කිරීමට භාවිත කරන්න.


┈┈╭━╱▔▔▔▔╲━╮┈┈┈ꜱ
┈┈╰╱╭▅╮╭▅╮╲╯┈┈┈ᴇ
╳┈┈▏╰┈▅▅┈╯▕┈┈┈┈ᴡ
┈┈┈╲┈╰━━╯┈╱┈┈╳┈ǫ
┈┈┈╱╱▔╲╱▔╲╲┈┈┈┈ᴜ
┈╭━╮▔▏┊┊▕▔╭━╮┈╳ᴇ
┈┃┊┣▔╲┊┊╱▔┫┊┃┈┈ᴇ
┈╰━━━━╲╱━━━━╯┈╳ɴ
  ᴾᵒʷᵉʳᵈ ᴮʸ ˢᵉʷ Qᵘᵉᵉⁿ`);
    }));
}
}


/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj

*/
const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;

const sew = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');
const SEWQU = ('*************************************\n*👑ANTI SPAM CLEAR RIBBON👑*\n\n       👑By ' + Config.BOTNAME + '👑\n       \n\n\n\n```✨✨Do Not Go Up✨✨```\n            *Clear Ribbon*\n    _👑by      ' + Config.BOTNAME + '👑_\n    \n    \n\n```✨✨Do Not Go Up✨✨```\n*ඉහලට යෑමෙන් වලිකින්න.*\n            *Clear Ribbon*\n    _👑by      ' + Config.BOTNAME + '👑_\n\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\n.\n\n\n\n\n\n\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴜᴇᴇɴ\n*************************************')
const FINAL = "THIS IS AN ANTISAPM (anti lag),"
const MuteSew = "Trying to close group,"
const MUT = ".mute"
const TAG = ".tag"
const SCRIPTBYSEW = "Running Clear Reban Script."

async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

QueenSew.newcmdaddtosew({pattern: 'antispam', fromMe: true, delownsewcmd: false, dontAdCommandList: true}, (async (message, match) => {

  var msg = await message.reply('❉Safe Mode Activating....');

  await message.client.sendMessage(
    message.jid,MuteSew, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUT, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCRIPTBYSEW, MessageType.text);

        await message.client.sendMessage(
          message.jid,SEWQU, MessageType.text);

           await message.client.sendMessage(
             message.jid,SEWQU, MessageType.text);
            
             await message.client.sendMessage(
                message.jid,TAG, MessageType.text);

          await message.client.sendMessage(
              message.jid,SEWQU, MessageType.text);

                        
  }));
  
  
QueenSew.newcmdaddtosew({pattern: 'antispam', fromMe: false, delownsewcmd: false, desc: sew,}, (async (message, match) => {
var us = await checkUsAdmin(message)
if (!us) return;
  var msg = await message.reply('❉Safe Mode Activating....');

  await message.client.sendMessage(
    message.jid,MuteSew, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUT, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCRIPTBYSEW, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,SEWQU, MessageType.text);
         await message.client.sendMessage(
            message.jid,SEWQU, MessageType.text);
             await message.client.sendMessage(
                message.jid,TAG, MessageType.text);
          await message.client.sendMessage(
              message.jid,SEWQU, MessageType.text);
  }));

const ravibutton = require('coded-by-ravindu-manoj');
const QueenSew = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');
const Heroku = require('heroku-client');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('spammer');

const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});


let baseURI = '/apps/' + Config.HEROKU.APP_NAME;


QueenSew.newcmdaddtosew({pattern: 'boomstop', fromMe: true, dontAdCommandList: true}, (async (message, match) => {

    await message.client.sendMessage(message.jid, Lang.STOP_SPAM, MessageType.text);

    console.log(baseURI);
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.client.sendMessage(message.jid, error.message, MessageType.text);

    });
}));

QueenSew.newcmdaddtosew({pattern: 'boomtext ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {


    if (match[1] === '') {

        return await message.client.sendMessage(message.jid, Lang.NEED_WORD);

    }

    var spam = `${match[1]}`
    var fin = spam.replace(/#/g, "\n");

    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);

    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
    
    await message.client.sendMessage(message.jid, fin, MessageType.text);
}));


QueenSew.newcmdaddtosew({pattern: 'boomaudio$', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
    
    if (!message.reply_message) return await message.client.sendMessage(message.jid, Lang.AU_REP, MessageType.text);

    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .format('mp3')
        .save('output.mp3')
        .on('end', async () => {

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

            await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio});

        });
}));
QueenSew.newcmdaddtosew({pattern: 'boomphoto$', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
    const imgthumb = await thumbnail()
    if (!message.reply_message) return await message.client.sendMessage(message.jid, Lang.FOTO_FOT, MessageType.text);

    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.jpg')
        .on('end', async () => {

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

            await message.sendMessage(fs.readFileSync('output.jpg'), MessageType.image, {mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data});

        });
}));
QueenSew.newcmdaddtosew({pattern: 'boomstic$', fromMe: true, dontAdCommandList: true }, (async (message, match) => {    

    if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.ST_NEED, MessageType.text);
    if (message.reply_message.sticker) return await message.client.sendMessage(message.jid, Lang.ST_ST, MessageType.text);

    var locspam = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    if (message.reply_message.video === false && message.reply_message.image) {
        execFile(cwebp, [locspam, '-o', 'output.webp'], async err => {
            if (err) {
                throw err;
            }
        
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);
 
            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('./output.webp'), MessageType.sticker);

        });
    }

    ffmpeg(locspam)
        .outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
        .save('sticker.webp')
        .on('end', async () => {

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);


            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

            await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);

        });
}));

QueenSew.newcmdaddtosew({pattern: 'boomvid$', fromMe: true, dontAdCommandList: true }, (async (message, match) => {
    
    if (!message.reply_message) return await message.client.sendMessage(message.jid, Lang.VİD_NEED, MessageType.text);

    var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });

    ffmpeg(location)
        .save('output.mp4')
        .on('end', async () => {

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});


            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

            await message.sendMessage(fs.readFileSync('output.mp4'), MessageType.video, {mimetype: Mimetype.mpeg});

        });
}));


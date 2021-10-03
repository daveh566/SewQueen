/*
Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

SewQueen - Ravindu Manoj
*/
        const { thumbnail } = require('./media/thumbnail');
        const ravibutton = require('coded-by-ravindu-manoj');
        const Pach = require('sewqueen-rs');
        const fs = require("fs");
        const path = require("path");
        const events = require("./events");
        const os = require("os");
        const execx = require('child_process').exec;
        const chalk = require('chalk');
        const SewRavi = require('./config');
        const {WAConnection, MessageOptions, MessageType, Mimetype, Presence, WALocationMessage, WAMessageProto, ReconnectMode, ProxyAgent, ChatModification, GroupSettingChange, WA_MESSAGE_STUB_TYPES, WA_DEAFULT_EPHEMERAL, waChatKey, mentionedJid, processTime, prepareMessageFromContent, relayWAMessage } = require('@adiwajshing/baileys');  
        const {Message, StringSession, Image, Video} = require('./sewqueen/');
        const { DataTypes } = require('sequelize');
        const { getMessage } = require("./DataBase/greetings");
        const axios = require('axios');
        const got = require('got');
        const { setupdata, andata, startupdata } = require('./Function/sewdata');
        const SewQueenDB = SewRavi.DATABASE.define('SewQueen', {
        info: { type: DataTypes.STRING, allowNull: false },
        value: { type: DataTypes.TEXT, allowNull: false }});
        fs.readdirSync('./DataBase/').forEach(plugin => {
        if(path.extname(plugin).toLowerCase() == '.js') {
        require('./DataBase/' + plugin)}
})
       const Commandsdb = require('./DataBase/cmd');
       var OWN = { ff: '94785435462,94785457519' }
       String.prototype.format = function () {
       var i = 0, args = arguments;
       return this.replace(/{}/g, function () {
       return typeof args[i] != 'undefined' ? args[i++] : '';
})};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}
Array.prototype.remove = function() {
        var what, a = arguments, L = a.length, ax;
        while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
}}
        return this;
};
        async function sewQueen () {
        await SewRavi.DATABASE.sync();
        var StrSes_Db = await SewQueenDB.findAll({
        where: {
        info: 'StringSession'
}});
        const CDSew = new WAConnection();
        CDSew.version = [2, 2123, 8];
        const Session = new StringSession();
        await andata(CDSew)
        CDSew.logger.level = SewRavi.DEBUG ? 'debug' : 'warn';
        var nodata;
        if (StrSes_Db.length < 1) {
        nodata = true;
        CDSew.loadAuthInfo(Session.deCrypt(SewRavi.SESSION)); 
        } else {
        CDSew.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
}
        CDSew.on ('credentials-updated', async () => {
        console.log(chalk.blueBright.italic('🚀 Login Information Updated!'));
        const authInfo = CDSew.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
        await SewQueenDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
        await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
}})    
        CDSew.on('connecting', async () => {
        console.log(`${chalk.green.bold('Queen')}${chalk.blue.bold('Sew')}
        ${chalk.white.bold('Version:')} ${chalk.red.bold(SewRavi.VERSION)}
        ${chalk.blue.italic('🎲 Try To Login WhatsApp... Please Wait...')}`);
});
        CDSew.on('open', async () => {
        console.log(chalk.green.bold('⚛ Login successful!'));
        console.log(chalk.blueBright.italic('✧✧ Installing External Commands...'));
        console.log(chalk.blueBright.italic('❯❯❯PASSWORD CHECKING❮❮❮'));
        if (SewRavi.SEWRR == 'raviya') {
        console.log(chalk.green.bold('Password Done'));
         } else if (SewRavi.SEWRR !== 'raviya') {
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         console.log(chalk.red.bold('⚠⚠Password Incorrect⚠⚠'));
         throw new Error("Wrong password !!");
         return;
         }
        console.log(chalk.blueBright.italic('✧✧ Installing External Commands...'));
         var Commands = await Commandsdb.PluginDB.findAll();
         Commands.map(async (plugin) => {
         if (!fs.existsSync('./Commands/' + plugin.dataValues.name + '.js')) {
         console.log(plugin.dataValues.name);
         var response = await got(plugin.dataValues.url);
         if (response.statusCode == 200) {
         fs.writeFileSync('./Commands/' + plugin.dataValues.name + '.js', response.body);
         require('./Commands/' + plugin.dataValues.name + '.js');
}}});
        console.log(chalk.blueBright.italic('⚛ Command Installed!'));
        fs.readdirSync('./Commands').forEach(plugin => {
        if(path.extname(plugin).toLowerCase() == '.js') {
        require('./Commands/' + plugin);
}});
        let rssewqueengg = SewRavi.WORKTYPE == 'public' ? ' Public' : ' Private'
        console.log(chalk.green.bold('🎲 Sew Queen is' + rssewqueengg + ' 🎲'));
        await startupdata(CDSew)
    })
    CDSew.on('chat-update', async m => {
    await setupdata(m,CDSew)
    });
    try { await CDSew.connect() } catch {
    if (!nodata) {
    console.log(chalk.red.bold('Loading Old Version Session...'))
    CDSew.loadAuthInfo(Session.deCrypt(SewRavi.SESSION)); 
    try { await CDSew.connect() } catch {
                return;
}}}}
sewQueen();

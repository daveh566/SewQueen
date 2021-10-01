'use strict';

class Base {
    constructor(client) {
        Object.defineProperty(this, 'client', { value: client });
    }

    _clone() {
        return Object.assign(Object.create(this), this);
    }
    
    _patch(data) { return data; }
}

class Message extends Base {
    constructor(client, data) {
        super(client);
        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data.key.id === undefined ? undefined : data.key.id;
        this.jid = data.key.remoteJid;
        this.fromMe = data.key.fromMe;
        this.message = data.message.extendedTextMessage === null ? data.message.conversation : data.message.extendedTextMessage.text;
        this.unreadCount = data.unreadCount;
        this.timestamp = typeof(data.messageTimestamp) === 'object' ? data.messageTimestamp.low : data.messageTimestamp;
        this.data = data;
        
        if (data.message.hasOwnProperty('extendedTextMessage') &&
                data.message.extendedTextMessage.hasOwnProperty('contextInfo') === true && 
                data.message.extendedTextMessage.contextInfo.hasOwnProperty('quotedMessage')) { 
            this.reply_message = new ReplyMessage(this.client, data.message.extendedTextMessage.contextInfo); } else {
                this.reply_message = false;
            }
        
        if (data.message.hasOwnProperty('extendedTextMessage') &&
        data.message.extendedTextMessage.hasOwnProperty('contextInfo') === true && 
        data.message.extendedTextMessage.contextInfo.hasOwnProperty('mentionedJid')) {
            this.mention = data.message.extendedTextMessage.contextInfo.mentionedJid;
        } else {
            this.mention = false;
        }
        
        return super._patch(data);
    }

    async delete() {
        return await this.client.deleteMessage(this.jid, {id: this.id, remoteJid: this.jid, fromMe: true})
    }

    async reply(text) {
        var message = await this.client.sendMessage(this.jid, text, MessageType.text);
        return new Message(this.client, message)
    }

    async sendMessage(content, type = MessageType.text, options) {
        return await this.client.sendMessage(this.jid, content, type, options)
    }
    
      async prepareMessageFromContent(chatId, content, type, opts = {}) {
    let message = await this.client.prepareMessageContent(content, type, opts)
return await this.client.prepareMessageFromContent(chatId, message, opts) ;
    }
    async prepareMessage(chatId, content, type, opts = {}) {
return await this.client.prepareMessage(chatId, content, type, opts) ;
    }
    async SewQueenImage(chatId, content, type, opts = {}) {
let sewimage = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewimage.message.imageMessage
    }
    async SewQueenVideo(chatId, content, type, opts = {}) {
let sewvideo = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewvideo.message.videoMessage
    }
    async SewQueenDoc(chatId, content, type, opts = {}) {
let sewdoc = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewdoc.message.documentMessage
    }
    async SewQueenLoc(chatId, content, type, opts = {}) {
let sewloc = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewloc.message.locationMessage
    }
    async sendTyping() {
        return await this.client.updatePresence(this.jid, Presence.composing) ;
    }

    async sendRead() {
        return await this.client.chatRead(this.jid);
    }
};



/* Codded by @Ravindu Manoj
*/

class ReplyMessage extends Base {
    constructor(client, data) {
        super(client);
        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data.stanzaId;
        this.jid = data.participant;
        if (data.quotedMessage && data.quotedMessage.imageMessage) {
            this.message = data.quotedMessage.imageMessage.caption === null ? data.message.imageMessage.caption : '';
            this.caption = data.quotedMessage.imageMessage.caption === null ? data.message.imageMessage.caption : '';
            this.url = data.quotedMessage.imageMessage.url;
            this.mimetype = data.quotedMessage.imageMessage.mimetype;
            this.height = data.quotedMessage.imageMessage.height;
            this.width = data.quotedMessage.imageMessage.width;
            this.mediaKey = data.quotedMessage.imageMessage.mediaKey;
            this.image = true;
            this.video = false;
        } else if (data.quotedMessage && data.quotedMessage.videoMessage) {
            this.message = data.quotedMessage.videoMessage.caption === null ? data.message.videoMessage.caption : '';
            this.caption = data.quotedMessage.videoMessage.caption === null ? data.message.videoMessage.caption : '';
            this.url = data.quotedMessage.videoMessage.url;
            this.mimetype = data.quotedMessage.videoMessage.mimetype;
            this.height = data.quotedMessage.videoMessage.height;
            this.width = data.quotedMessage.videoMessage.width;
            this.mediaKey = data.quotedMessage.videoMessage.mediaKey;
            this.video = true;
        } else if (data.quotedMessage && data.quotedMessage.conversation) {
            this.message = data.quotedMessage.conversation;
            this.text = data.quotedMessage.conversation;
            this.image = false;
            this.video = false;
        }

        this.data = data;
                
        return super._patch(data);
    }

    async delete() {
        return await this.client.deleteMessage(this.jid, {id: this.id, remoteJid: this.jid, fromMe: true});
    }

    async reply(text) {
        var message = await this.client.sendMessage(this.jid, text, MessageType.text, {quoted: this.data});
        return new Message(this.client, message)
    }

    async sendMessage(content, type, options) {
        return await this.client.sendMessage(this.jid, content, type, options);
    }
    
      async prepareMessageFromContent(chatId, content, type, opts = {}) {
    let message = await this.client.prepareMessageContent(content, type, opts)
return await this.client.prepareMessageFromContent(chatId, message, opts) ;
    }
    async prepareMessage(chatId, content, type, opts = {}) {
return await this.client.prepareMessage(chatId, content, type, opts) ;
    }
    async SewQueenImage(chatId, content, type, opts = {}) {
let sewimage = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewimage.message.imageMessage
    }
    async SewQueenVideo(chatId, content, type, opts = {}) {
let sewvideo = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewvideo.message.videoMessage
    }
    async SewQueenDoc(chatId, content, type, opts = {}) {
let sewdoc = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewdoc.message.documentMessage
    }
    async SewQueenLoc(chatId, content, type, opts = {}) {
let sewloc = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewloc.message.locationMessage
    }
    async sendTyping() {
        return await this.client.updatePresence(this.jid, Presence.composing);
    }

    async download(location = this.id) {
        if (this.image) {
            await this.client.downloadAndSaveMediaMessage(this.data.quotedMessage.imageMessage, location);
            return this.id + '.' + this.mimetype.split('/')[1];    
        } else {
            return false;
        }
    }
};




class Image extends Base {
    constructor(client, data) {
        super(client);
        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data.key.id === undefined ? undefined : data.key.id;
        this.jid = data.key.remoteJid;
        this.fromMe = data.key.fromMe;
        this.caption = data.message.imageMessage.caption === null ? data.message.imageMessage.caption : '';
        this.url = data.message.imageMessage.url;
        this.timestamp = typeof(data.messageTimestamp) === 'object' ? data.messageTimestamp.low : data.messageTimestamp;
        this.mimetype = data.message.imageMessage.mimetype;
        this.height = data.message.imageMessage.height;
        this.width = data.message.imageMessage.width;
        this.mediaKey = data.message.imageMessage.mediaKey;
        this.data = data;
        
        if (data.message.imageMessage.hasOwnProperty('contextInfo') && data.message.contextInfo.quotedMessage) { 
            this.reply_message = new ReplyMessage(this.client, data.message.imageMessage.contextInfo); }
        else {
            this.reply_message = false;
        }
        
        return super._patch(data);
    }

    async delete() {
        return await this.client.deleteMessage(this.jid, {id: this.id, remoteJid: this.jid, fromMe: true})
    }

    async reply(text) {
        var message = await this.client.sendMessage(this.jid, text, MessageType.text, {quoted: this.data})
        return new Message(this.client, message)
    }

    async sendMessage(content, type, options) {
        return await this.client.sendMessage(this.jid, content, type, options)
    }
    
      async prepareMessageFromContent(chatId, content, type, opts = {}) {
    let message = await this.client.prepareMessageContent(content, type, opts)
return await this.client.prepareMessageFromContent(chatId, message, opts) ;
    }
    async prepareMessage(chatId, content, type, opts = {}) {
return await this.client.prepareMessage(chatId, content, type, opts) ;
    }
    async SewQueenImage(chatId, content, type, opts = {}) {
let sewimage = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewimage.message.imageMessage
    }
    async SewQueenVideo(chatId, content, type, opts = {}) {
let sewvideo = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewvideo.message.videoMessage
    }
    async SewQueenDoc(chatId, content, type, opts = {}) {
let sewdoc = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewdoc.message.documentMessage
    }
    async SewQueenLoc(chatId, content, type, opts = {}) {
let sewloc = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewloc.message.locationMessage
    }

    async sendTyping() {
        return await this.client.updatePresence(this.jid, Presence.composing) ;
    }

    async sendRead() {
        return await this.client.chatRead(this.jid);
    }

    async download(location = this.id) {
        await this.client.downloadAndSaveMediaMessage(this.data, location);
        return this.id + '.' + this.mimetype.split('/')[1];
    }
};


class Video extends Base {
    constructor(client, data) {
        super(client);
        if (data) this._patch(data);
    }

    _patch(data) {
        this.id = data.key.id === undefined ? undefined : data.key.id;
        this.jid = data.key.remoteJid;
        this.fromMe = data.key.fromMe;
        this.caption = data.message.videoMessage.caption === null ? data.message.videoMessage.caption : '';
        this.url = data.message.videoMessage.url;
        this.timestamp = typeof(data.messageTimestamp) === 'object' ? data.messageTimestamp.low : data.messageTimestamp;
        this.mimetype = data.message.videoMessage.mimetype;
        this.height = data.message.videoMessage.height;
        this.width = data.message.videoMessage.width;
        this.mediaKey = data.message.videoMessage.mediaKey;
        this.data = data;
        
        if (data.message.videoMessage.hasOwnProperty('contextInfo') && data.message.contextInfo.quotedMessage) { 
            this.reply_message = new ReplyMessage(this.client, data.message.videoMessage.contextInfo); }
        else {
            this.reply_message = false;
        }
        
        return super._patch(data);
    }

    async delete() {
        return await this.client.deleteMessage(this.jid, {id: this.id, remoteJid: this.jid, fromMe: true})
    }

    async reply(text) {
        var message = await this.client.sendMessage(this.jid, text, MessageType.text, {quoted: this.data})
        return new Message(this.client, message)
    }

    async sendMessage(content, type, options) {
        return await this.client.sendMessage(this.jid, content, type, options)
    }

    async sendTyping() {
        return await this.client.updatePresence(this.jid, Presence.composing) ;
    }
    
      async prepareMessageFromContent(chatId, content, type, opts = {}) {
    let message = await this.client.prepareMessageContent(content, type, opts)
return await this.client.prepareMessageFromContent(chatId, message, opts) ;
    }
    async prepareMessage(chatId, content, type, opts = {}) {
return await this.client.prepareMessage(chatId, content, type, opts) ;
    }
    async SewQueenImage(chatId, content, type, opts = {}) {
let sewimage = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewimage.message.imageMessage
    }
    async SewQueenVideo(chatId, content, type, opts = {}) {
let sewvideo = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewvideo.message.videoMessage
    }
    async SewQueenDoc(chatId, content, type, opts = {}) {
let sewdoc = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewdoc.message.documentMessage
    }
    async SewQueenLoc(chatId, content, type, opts = {}) {
let sewloc = await this.client.prepareMessage(chatId, content, type, opts) ;
return sewloc.message.locationMessage
    }
    async sendRead() {
        return await this.client.chatRead(this.jid);
    }

    async download(location = this.id) {
        await this.client.downloadAndSaveMediaMessage(this.data, location);
        return this.id + '.' + this.mimetype.split('/')[1];
    }
};

class StringSession {
    constructor() {
    }

    deCrypt(string = undefined) {
        if ('QUEENSEW_SESSION' in process.env && string === undefined) {
            string = process.env.STRING_SESSION;
        } else if (string !== undefined) {
            if (fs.existsSync(string)) {
                string = fs.readFileSync(string, {encoding:'utf8', flag:'r'});
            }
        }
        
        var split = string.split(';;;');
        if (split.length >= 2) {
            return JSON.parse(Buffer.from(split[split.length - 1], 'base64').toString('utf-8'));
        }
    }

    createStringSession(dict) {
        return 'QUEENSEW;;;' + Buffer.from(JSON.stringify(dict)).toString('base64');
    }
}

module.exports = {
    Base: Base,
    Message: Message,
    StringSession: StringSession,
    ReplyMessage: ReplyMessage,
    Image: Image,
    Video: Video
};
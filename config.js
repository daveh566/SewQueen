/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './sewqueen.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'sew-queen 2.0.0 - Full Control',
    CHANNEL: 'https://t.me/SewQueen',
    SESSION: process.env._SEW_QUEEN_SESSION === undefined ? '' : process.env._SEW_QUEEN_SESSION,
    WARN_COUNT: process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
    WARNMSG: process.env.WARN_MSG === undefined ? 'bye 🤏' : process.env.WARN_MSG,
    PROXY: process.env.PROXY === undefined ? 'false' : process.env.PROXY,
    GRPMANAGE: process.env.GROUP_MANAGE === undefined ? 'false' : process.env.GROUP_MANAGE,
    CLONE_MSG: process.env.CLONE_MSG === undefined ? 'Group Clone Successful' : process.env.CLONE_MSG,
    DEEPAI: process.env.DEEP_AI === undefined ? '09010100-625c-46c4-b226-8f9a5e6e548f' : process.env.DEEP_AI,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'SEW' : process.env.ALIVE_MESSAGE,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    CPK: process.env.CAPTION_NAME === undefined ? 'Coded By t.me/RavinduManoj' : process.env.CAPTION_NAME,
    ALIMG: process.env.SYSTEM_IMAGE === undefined ? 'https://i.ibb.co/RzSZW8F/IMG-20210810-WA0005.jpg' : process.env.SYSTEM_IMAGE,
    SEWRR: process.env.ZZ_PASSWORD === undefined ? '' : process.env.ZZ_PASSWORD,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    OWNERSHIP: process.env.OWNER_SHIP === undefined ? 'RAVINDU MANOJ' : process.env.OWNER_SHIP,
    BOTNAME: process.env.YOUR_BOT_NAME === undefined ? '❄💘sew💓❄bot(💗සූටික්කි💗)R💌S' : process.env.YOUR_BOT_NAME,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    IBBAPI: process.env.IMGBB_API === undefined ? '9b27b7a92df77d77bad0fc2584611296' : process.env.IMGBB_API,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './sewqueen.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG"
};

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
const got = require('got');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('weather');
const Config = require('../config')
let RS = Config.WORKTYPE == 'public' ? false : true
QueenSew.newcmdaddtosew({pattern: 'news ?(.*)', fromMe: RS, desc: Lang.NEWS_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_CATEGORY);
	const url = `https://inshortsapi.vercel.app/news?category=${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*📁 ' + Lang.CATEGORY +':* ```' + match[1] + '```\n\n\n' +
		'*💠 ' + Lang.NEWST +':* ```' + json.data[0].title + '```\n' + 
                '*📰 ' + Lang.NEWS +':* ```' + json.data[0].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[0].readMoreUrl + '```\n\n' +
                '*💠 ' + Lang.NEWST +':* ```' + json.data[1].title + '```\n' +                                                                         
		'*📰 ' + Lang.NEWS +':* ```' + json.data[1].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[1].readMoreUrl + '```\n\n' + 
                '*💠 ' + Lang.NEWST +':* ```' + json.data[2].title + '```\n' +
                '*📰 ' + Lang.NEWS +':* ```' + json.data[2].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[2].readMoreUrl + '```\n\n' + 
                '*💠 ' + Lang.NEWST +':* ```' + json.data[3].title + '```\n' +
   	        '*📰 ' + Lang.NEWS +':* ```' + json.data[3].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[3].readMoreUrl + '```\n\n' + 
                '*💠 ' + Lang.NEWST +':* ```' + json.data[4].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[4].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[4].readMoreUrl + '```\n\n'+ 
		'*💠 ' + Lang.NEWST +':* ```' + json.data[5].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[5].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[5].readMoreUrl + '```\n\n'+
		'*💠 ' + Lang.NEWST +':* ```' + json.data[6].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[6].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[6].readMoreUrl + '```\n\n'+									 
		'*💠 ' + Lang.NEWST +':* ```' + json.data[7].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[7].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[7].readMoreUrl + '```\n\n'+									 
		'*💠 ' + Lang.NEWST +':* ```' + json.data[8].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[8].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[8].readMoreUrl + '```\n\n'+
		'*💠 ' + Lang.NEWST +':* ```' + json.data[9].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[9].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[9].readMoreUrl + '```\n\n'+
		'*💠 ' + Lang.NEWST +':* ```' + json.data[10].title + '```\n' +                                                                         
                '*📰 ' + Lang.NEWS +':* ```' + json.data[10].content + '```\n' + 
		'*✨ ' + Lang.RMLINK +':* ```' + json.data[10].readMoreUrl + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDC, MessageType.text);
	}
});

QueenSew.newcmdaddtosew({ pattern: 'show ?(.*)', fromMe: RS , desc: "Get info related to tv series and shows"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage("give me the show name")

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          name,
          type,	
          language,
           status,
	  officialSite,
	  summary,
        } = response.data[0].show

   
        const msg = `*${"Name"}*: ${name}\n*${"Type"}*: ${type}\n*${"Type"}*: ${status}\n*${"Summary"}*: ${summary}\n*${"Official Site"}*: ${officialSite}`
       
       await message.client.sendMessage(message.jid, msg + '\n\nᴘᴏᴡᴇʀᴅ ʙʏ ꜱᴇᴡ ǫᴘᴇᴇɴ' , MessageType.text);
      })
      .catch(
        async (err) => await message.sendMessage("Not Found" ),
      )
  },
)
QueenSew.newcmdaddtosew({ pattern: 'movie ?(.*)', fromMe: RS, desc: "Shows movie info." }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `http://www.omdbapi.com/?i=tt3896198&apikey=a6ad5056&t=${match[1]}&plot=full`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let msg = '```';
	msg += 'Title      : ' + json.Title + '\n\n';
	msg += 'Year       : ' + json.Year + '\n\n';
	msg += 'Rated      : ' + json.Rated + '\n\n';
	msg += 'Released   : ' + json.Released + '\n\n';
	msg += 'Runtime    : ' + json.Runtime + '\n\n';
	msg += 'Genre      : ' + json.Genre + '\n\n';
	msg += 'Director   : ' + json.Director + '\n\n';
	msg += 'Writer     : ' + json.Writer + '\n\n';
	msg += 'Actors     : ' + json.Actors + '\n\n';
	msg += 'Plot       : ' + json.Plot + '\n\n';
	msg += 'Language   : ' + json.Language + '\n\n';
	msg += 'Country    : ' + json.Country + '\n\n';
	msg += 'Awards     : ' + json.Awards + '\n\n';
	msg += 'BoxOffice  : ' + json.BoxOffice + '\n\n';
	msg += 'Production : ' + json.Production + '\n\n';
	msg += 'imdbRating : ' + json.imdbRating + '\n\n';
	msg += 'imdbVotes  : ' + json.imdbVotes + '```';
	await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));


const IPSTATUS_DESC = "It Sends Your IP details"
const NEED_IP = "*Enter Your IP Address..!*"
const IP = "IP :"
const ST = "STATUS :"
const CONTINENT = "CONTINENT :"
const COUNTRY = "COUNTRY :"
const COUNTRYCODE = "COUNTRYCODE :"
const REGIONNAME = "REGIONNAME :"
const CITY = "CITY :"
const ZIP = "ZIP :"
const CURRENCY = "CURRENCY :"
const ISP = "ISP :"
const MOBILE = "MOBILE :"
const PROXY = "PROXY :"
const NOT_FOUNDIP = "```Sorry,I could not your IP 😖```"

  QueenSew.newcmdaddtosew({pattern: 'ip ?(.*)', desc: 'gives you the detail of your IP' ,fromMe: RS}, async (message, match) => {
    if (match[1] === '') return await message.reply(NEED_IP);
	const url = `https://api.techniknews.net/ipgeo/${match[1]}`;
	try {
		const response = await got(url);
		const ipjson = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🔴 ' + IP +'* ```' + match[1] + '```\n\n' +
		'*🤡' + ST +'* ```' + ipjson.status+ '```\n' +
        '*🌐' + CONTINENT +'* ```' + ipjson.continent+ '```\n' +
        '*🗺' + COUNTRY +'* ```' + ipjson.country+ '```\n' +
        '*🔢' + COUNTRYCODE +'* ```' + ipjson.countryCode+ '```\n' +
        '*🌍' + REGIONNAME +'* ```' + ipjson.regionName+ '```\n' +
        '*🚩' + CITY +'* ```' + ipjson.city+ '```\n' +
        '*🏛' + ZIP +'* ```' + ipjson.zip+ '```\n' +
        '*💸' + CURRENCY +'* ```' + ipjson.currency+ '```\n\n' +
        '*📡' + ISP +'* ```' + ipjson.isp+ '```\n' +
        '*🛡' + PROXY +'* ```' + ipjson.proxy+ '```\n' +
        '*📱' + MOBILE +'* ```' + ipjson.mobile+ '```\n', MessageType.text);
	} 
    catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDIP, MessageType.text);
	}
 });

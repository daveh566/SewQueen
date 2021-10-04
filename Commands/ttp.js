/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const { thumbnail } = require('../media/thumbnail');
const QueenSew = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
let rs = Config.WORKTYPE == 'public' ? false : true
const request = require('request');
const Pach = require('sewqueen-rs');
const os = require('os');
var rgmsk = { cd: 'L3Jvb3QvUXVlZW5TZXdXaGF0c2FwcEJvdC8=', pay: '' }    
var rrrr = Buffer.from(rgmsk.cd, 'base64')
var ssss = rrrr.toString('utf-8')
rgmsk.pay = ssss
if (os.userInfo().homedir !== rgmsk.pay) return;
const Language = require('../language');
const Lang = Language.getString('ttp');

var description = ''
var cmd = ''
var cmd_desc = ''

if (Config.LANG == 'EN') description = 'Shows all ttp commands.', cmd = '*❄ Command:* ', cmd_desc = '*✨ Description:* '
if (Config.LANG == 'SI') description = 'ttp කමාන්ඩ් ලිස්ට් එක.', cmd = '*❄ කමාන්ඩ්:* ', cmd_desc = '*✨ විස්තර:* '
QueenSew.newcmdaddtosew({ pattern: 'sewttp$', fromMe: rs, desc: description }, (async (message, match) => {
  var t1 = Lang.TTP_DESC
  var t2 = Lang.ATTP_DESC
  
  var payload = '';
  
  if (Config.LANG == 'SI') {
  payload = cmd + '.wttp' + '\n' + cmd_desc + 'වචනය වතුර ආකාරයේ ස්ටිකර් එකක් බවට පත් කරයි.' + '\n\n' +
    cmd + '.http' + '\n' + cmd_desc + 'වචනය අත් ආකරයේ ස්ටිකර් එකක් බවට පත් කරයි ' + '\n\n' +
    cmd + '.ahttp' + '\n' + cmd_desc + 'වචනය කලු කුරුලු ආකාරයේ ස්ටිකර් එකක් බවට පත් කරයි' + '\n\n' +
    cmd + '.bttp' + '\n' + cmd_desc + 'වචනය මැනික් ආකාරයේ ස්ටිකර් එකක් බවට පත් කරයි ' + '\n\n' +
    cmd + '.gttp' + '\n' + cmd_desc + 'වචනය ස්මර්ෆ්ස් ආකාරයේ ස්ටිකර් එකක් බවට පත් කරයි' + '\n\n' +
    cmd + '.sttp' + '\n' + cmd_desc + 'වචනය විදුලි ආකාරයේ ස්ටිකර් එකක් බවට පත් කරයි' + '\n\n' +
    cmd + '.ettp' + '\n' + cmd_desc + 'වචනය හයිලයිටඩ් ඇනිමේටඩ් ස්ටිකර් එකක් බවට පත් කරයි' + '\n\n' +
    cmd + '.pttp' + '\n' + cmd_desc + 'වචනය ට්‍රාන්සිශන් ඇනිමේටඩ් ස්ටිකර් එකක් බවට පත් කරයි' + '\n\n' +
    cmd + '.ttp' + '\n' + cmd_desc + t1 + '\n\n' +
    cmd + '.attp' + '\n' + cmd_desc + t2
    } else {
    
     payload = cmd + '.http' + '\n' + cmd_desc + 'Converts text to water-themed sticker' + '\n\n' +
    cmd + '.bttp' + '\n' + cmd_desc + 'Converts text to hand writing sticker' + '\n\n' +
    cmd + '.wttp' + '\n' + cmd_desc + 'Converts text to blackbird-themed sticker' + '\n\n' +
    cmd + '.ttp' + '\n' + cmd_desc + t1 + '\n\n' +
    cmd + '.ahttp' + '\n' + cmd_desc + 'Converts text to highlighted animated sticker' + '\n\n' +
    cmd + '.attp' + '\n' + cmd_desc + t2 + '\n\n' +
    cmd + '.gttp' + '\n' + cmd_desc + 'Converts text to gum-themed sticker' + '\n\n' +
    cmd + '.sttp' + '\n' + cmd_desc + 'Converts text to smurfs-themed sticker' + '\n\n' +
    cmd + '.ettp' + '\n' + cmd_desc + 'Converts text to electric-themed sticker' + '\n\n' +
    cmd + '.pttp' + '\n' + cmd_desc + 'Converts text to transition animated sticker.'
    }
  await message.client.sendMessage(message.jid,payload, MessageType.text)
}));
QueenSew.newcmdaddtosew({ pattern: 'ttp ?(.*)', fromMe: rs, dontAdCommandList: true }, (async (message, match) => {
const imgthumb = await thumbnail()
  if (message.reply_message) {
    var text = message.reply_message.text
    var uri = encodeURI(text)
    var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: Config.CPK })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var uri = encodeURI(match[1])
    var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, thumbnail: imgthumb, quoted: message.data, caption: Config.CPK })
  }
}));
QueenSew.newcmdaddtosew({ pattern: 'attp ?(.*)', fromMe: rs, dontAdCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var uri = encodeURI(text)
    var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var uri = encodeURI(match[1])
    var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
  }
}));
QueenSew.newcmdaddtosew({ pattern: 'wttp ?(.*)', fromMe: rs, dontAdCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await Pach.ttp(text, 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/wttp.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await Pach.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Water?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/wttp.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/wttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
QueenSew.newcmdaddtosew({ pattern: 'http ?(.*)', fromMe: rs, dontAdCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await Pach.ttp(text, 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/http.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await Pach.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Style?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/http.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/http.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
QueenSew.newcmdaddtosew({ pattern: 'bttp ?(.*)', fromMe: rs, dontAdCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await Pach.ttp(text, 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/bttp.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await Pach.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Blackbird?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/bttp.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/bttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
QueenSew.newcmdaddtosew({ pattern: 'gttp ?(.*)', fromMe: rs, dontAdCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await Pach.ttp(text, 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/gttp.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await Pach.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Fluffy?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/gttp.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/gttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
QueenSew.newcmdaddtosew({ pattern: 'sttp ?(.*)', fromMe: rs, dontAdCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await Pach.ttp(text, 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/sttp.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await Pach.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Smurfs?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/sttp.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/sttp.png').videoFilters('chromakey=white').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
QueenSew.newcmdaddtosew({ pattern: 'ettp ?(.*)', fromMe: rs, dontAdCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await Pach.ttp(text, 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/ettp.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await Pach.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Electric?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/ettp.png', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/ettp.png').videoFilters('chromakey=#FFFFFF:similarity=0.01').save('af.png').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.png').outputOptions(["-y", "-vcodec libwebp"]).videoFilters('scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('st.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('st.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
QueenSew.newcmdaddtosew({ pattern: 'ahttp ?(.*)', fromMe: rs, dontAdCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await Pach.ttp(text, 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/ahttp.gif', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await Pach.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Highlight-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/ahttp.gif', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/ahttp.gif').videoFilters('chromakey=black').save('af.gif').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  }
}));
QueenSew.newcmdaddtosew({ pattern: 'pttp ?(.*)', fromMe: rs, dontAdCommandList: true }, (async (message, match) => {
  if (message.reply_message) {
    var text = message.reply_message.text
    var ttinullimage = await Pach.ttp(text, 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/pttp.gif', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  } else {
    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
    var ttinullimage = await Pach.ttp(match[1], 'https://api.flamingtext.com/logo/Design-Memories-Animation?_variations=true&text=', '&_loc=catdynamic')
    var download = async(uri, filename, callback) => {
      await request.head(uri, async(err, res, body) => {    
        await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
      });
    };
    await download(ttinullimage.image, '/root/QueenSewWhatsappBot/pttp.gif', async() => { 
      ffmpeg('/root/QueenSewWhatsappBot/pttp.gif').videoFilters('chromakey=white').save('af.gif').on('end', async () => {
        ffmpeg('/root/QueenSewWhatsappBot/af.gif').outputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 600x600"]).videoFilters('scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1').save('sticker.webp').on('end', async () => {
          await message.sendMessage(fs.readFileSync('sticker.webp'), MessageType.sticker);
        })
      })
    })
  }
}));

QueenSew.newcmdaddtosew({ pattern: 'animesay ?(.*)', fromMe: rs, desc: Lang.ANIME_DESC }, (async (message, match) => {
const imgthumb = await thumbnail()

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, thumbnail: imgthumb, quoted: message.data, caption: Config.CPK })

    }));

    QueenSew.newcmdaddtosew({ pattern: 'changesay ?(.*)', fromMe: rs, desc: Lang.CHANGE_DESC }, (async (message, match) => {
const imgthumb = await thumbnail()

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, thumbnail: imgthumb, quoted: message.data, caption: Config.CPK })

    }));

    QueenSew.newcmdaddtosew({ pattern: 'trumpsay ?(.*)', fromMe: rs, desc: Lang.TRUMP_DESC }, (async (message, match) => {
const imgthumb = await thumbnail()

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${match[1].replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, thumbnail: imgthumb, quoted: message.data, caption: Config.CPK })

    }));
let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let pp = fs.readFileSync('./icon.jpeg')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: ` `.trimStart(),
  header: '*╭────────────────*',
  body: '*│*  *✧%cmd*',
  footer: '*╰────────────────*\n',
  after: `  © ī.am/ꪶᴅᴇᴠɪʟꫂ⁩⁴⁰⁴⁩⁩⁩   `,
}

//troli

const anu = {
key: {
			participant: `0@s.whatsapp.net`,
      remoteJid: 'status@broadcast'
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail":  fs.readFileSync('./icon.jpeg') ////Gambarny
					},
					"title": `Ammu`, //Kasih namalu 
					"description": `%name`, 
					"currencyCode": "INR",
					"priceAmount1000": "999999",
					"retailerId": ` %name`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker','quotes', 'admin', 'grup', 'premium', 'internet', 'owner', 'nulis', 'downloader', 'tools','anime','videomaker', 'fun', 'database', 'audio','info','owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'ᴍᴀɪɴ',
    'game': 'ɢᴀᴍᴇ',
    'xp': 'ᴇxᴘ & ʟɪᴍɪᴛ',
    'anime': 'ᴀɴɪᴍᴇ',
    'sticker': 'ꜱᴛɪᴄᴋᴇʀ',
    'shell': 'ᴍᴀɢɪᴄ ꜱʜᴇʟʟꜱ',
    'quotes': 'Qᴜᴏᴛᴇꜱ',
    'admin': `ᴀᴅᴍɪɴ ${global.opts['restrict'] ? '' : '(Disabled)'}`,
    'group': 'ɢʀᴏᴜᴘ',
    'premium': 'ᴘʀᴇᴍɪᴜᴍ',
    'internet': 'ɪɴᴛᴇʀɴᴇᴛ',
    'owner': 'ᴏᴡɴᴇʀ',
    'nulis': 'ᴍᴀɢᴇʀɴᴜʟɪꜱ & ʟᴏɢᴏ',
    'downloader': 'ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',
    'tools': 'ᴛᴏᴏʟꜱ',
    'Video Maker':'ᴠɪᴅᴇᴏᴍᴀᴋᴇʀ',
    'fun': 'ꜰᴜɴ',
    'database': 'ᴅᴀᴛᴀʙᴀꜱᴇ',
    'vote': 'ᴠᴏᴛɪɴɢ',
    'audio': 'ᴠᴏɪᴄᴇ ᴄʜᴀɴɢᴇʀ',
    'info': 'ɪɴꜰᴏ',
    '': 'No Category',
  }
  if (teks == 'game') tags = {
    'game': '🅶🅰🅼🅴'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': '🆂🆃🅸🅲🅺🅴🆁'
  }
  if (teks == 'shell') tags = {
    'shell': 'Magic Shells'
  }
  if (teks == 'quotes') tags = {
    'quotes': '🆀🆄🅾🆃🅴🆂'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Disabled)'}`
  }
  if (teks == 'grup') tags = {
    'group': '🅶🆁🅾🆄🅿'
  }
  if (teks == 'premium') tags = {
    'premium': '🅿🆁🅴🅼🅸🆄🅼'
  }
  if (teks == 'videomaker') tags = {
    'videomaker': '🅸🅳🅴🅾 🅼🅰🅺🅴🆁'
  }
  if (teks == 'internet') tags = {
    'internet': '🅸🅽🆃🅴🆁🅽🅴🆃'
  }
  if (teks == 'owner') tags = {
    'owner': 'ᴏᴡɴᴇʀ'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': '🅳🅾🆆🅽🅻🅾🅰🅳🅴🆁'
  }
  if (teks == 'tools') tags = {
    'tools': '🆃🅾🅾🅻'
  }
  if (teks == 'fun') tags = {
    'fun': '🅵🆄🅽'
  }
  if (teks == 'anime') tags = {
    'anime': '🅰🅽🅸🅼🅴'
  }
  if (teks == 'database') tags = {
    'database': '🅳🅰🆃🅰🅱🅰🆂🅴'
  }
  if (teks == 'audio') tags = {
    'audio': '🆅🅾🅸🅲🅴 🅲🅷🅰🅽🅶🅴🆁'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': '🅰🅳🆅🅰🅽🅲🅴🅳'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
     // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `ㅤ`.trim(),
          "buttonText": "*ᴄʟɪᴄᴋ*",
          "footerText": '```© ᴢᴇᴅ ʙᴏᴛ (ʀᴇᴄᴏᴅᴇ ʙᴏᴛ) ʀᴇᴄᴏᴅᴇ ʙʏ ᴢᴇᴅ.```',
          "description": "ᴄʟɪᴄᴋ ʜᴇʀᴇ ꜰᴏʀ ᴍᴏʀᴇ ᴏᴘᴛɪᴏɴㅤ",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": "ᴀʟʟ ᴍᴇɴᴜ",
                  "rowId": ".? all"
                }, {
                  "title": "ɢʀᴏᴜᴘ ɪɴꜰᴏ",
                  "rowId": ".groupinfo"
                }, {
                  "title": "ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                  "rowId": ".? grup"
                },{
                  "title": "ʙᴏᴛ ʀᴜʟᴇꜱ",
                  "rowId": ".rule"
                },{
                  "title": "ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                  "rowId": ".? owner"
                }
              ]
            }
          ],
          "jpegThumbnail":  fs.readFileSync('./devil.jpeg'),
          "contextInfo": {
            "quotedMessage": m.message,
            "stanzaId": m.key.id,
            "participant": '0@s.whatsapp.net',
            "remoteJid": 'status@broadcast',
            "forwardingScore":9,
            "isForwarded": true
          }
        }
      }, {quoted: anu}), { waitForAck: true })
    }
    // use this if you use business whatsapp
    //   throw `
    // ┌〔 LIST MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Presented by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Ready for *${_p}levelup*` : `${max - exp} More XP for levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let img = fs.readFileSync('./icon.jpeg')
    let tod = 'https://youtube.com'
const thumb = fs.readFileSync('./icon.jpeg')
let msg = await conn.prepareMessage("0@s.whatsapp.net", img, "imageMessage", {thumbnail: fs.readFileSync('./icon.jpeg')})
const buttons = [
{buttonId: `,creator`, buttonText: {displayText: 'ʙᴏᴛ ᴏᴡɴᴇʀ'}, type: 1},

{buttonId: `,git`, buttonText: {displayText: 'ɢɪᴛʜᴜʙ ʟɪɴᴋ'}, type: 1}
]
const buttonsMessage = {
    contentText: `HIIㅤㅤㅤㅤ`,
    footerText: text,
    buttons: buttons,
    headerType: 4,
imageMessage: msg.message.imageMessage, thumbnail: global.thumb}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage}, {quoted: anu,  thumbnail: fs.readFileSync('./icon.jpeg'), contextInfo: { mentionedJid: conn.parseMention(text)}})
conn.relayWAMessage(sendMsg)
  } catch (e) {
    conn.reply(m.chat, 'Sorry, Try Again', m)
    throw e
  }
}

    /*await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/DEVILSER/DEVILSER/main/Media/Ammu/Ammukutty-407x400.png")).buffer(), text.trim(), 'By DEVILSER', 'Owner Bot', ',owner', 'All Commands', '.? all', m)*/
      /*await conn.sendButton(m.chat, text.trim(), watermark, 'OWNER', ',owner', m)*/
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(list|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Kolkata').format('HH')
  res = "Good Morning 🌄"
  if (time >= 4) {
    res = "Good Morning 🌞"
  }
  if (time > 10) {
    res = "Good afternoon 🌅"
  }
  if (time >= 15) {
    res = "Good Evening 🌆"
  }
  if (time >= 18) {
    res = "Good Night 🌌"
  }
  return res
}

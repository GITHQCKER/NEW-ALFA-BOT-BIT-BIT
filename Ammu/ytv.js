let limit = 30

let fetch = require('node-fetch')

let handler = async (m, { conn, args, isPrems, isOwner }) => {

	if (!args || !args[0]) throw 'Uhm... urlnya mana?'	let chat = db.data.chats[m.chat]

	let dl_link = `https://yt-downloader.akkun3704.repl.co/?url=${args[0]}&filter=audioonly&quality=&contenttype=`

	let json = await (await fetch(`https://yt-downloader.akkun3704.repl.co/yt?url=${args[0]}`)).json()

	let res = await (await fetch(dl_link)).buffer()

	let isLimit = (isPrems || isOwner ? 99 : limit) * 1000000 < res.length

  conn.reply(m.chat,' ```Ⓓ︎Ⓞ︎Ⓦ︎Ⓝ︎Ⓛ︎Ⓞ︎Ⓐ︎Ⓓ︎Ⓘ︎Ⓝ︎Ⓖ︎...```', m)

	if (!isLimit) conn.sendMessage(m.chat, res, chat.useDocument ? 'documentMessage' : 'videoMessage', { quoted: m, filename: json.result.videoDetails.title + '.mp4', mimetype: 'video/mp4' })

}

handler.help = ['mp4', 'v'].map(v => 'yt' + v)

handler.tags = ['downloader']

handler.command = /^yt(a|mp3)$/i

handler.limit = true

module.exports = handler
module.exports = handler
let fetch = require('node-fetch')
let fs = require('fs')
let text = 'cobain'
let handler  = async (m, { conn }) => {

let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const thumb = fs.readFileSync('./icon.jpeg')
function clockString(ms) {
  
}
let text = `


â¢ ð¢ _*SUPPORT*_
â­ââ
ââ¢ *MY GROUP*
â GROUP -https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ
â°ââ
`.trim()
conn.send3ButtonImg(m.chat, thumb, text, 'SCRIPT', 'MENUã½', '.? menu', 'OWNER', '.owner', 'à¶±à·à¶­à·', '.rule', fkon)
}

handler.help = ['main']
handler.command = handler.command = /^(sc)$/i

handler.fail = null

module.exports = handler

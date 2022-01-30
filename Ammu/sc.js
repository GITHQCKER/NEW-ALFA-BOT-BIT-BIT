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


• 📢 _*SUPPORT*_
╭─○
│• *MY GROUP*
│ GROUP -https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ
╰─○
`.trim()
conn.send3ButtonImg(m.chat, thumb, text, 'SCRIPT', 'MENU📚', '.menu', 'OWNER👤', '.owner', 'DONASI🤑', '.donasi', fkon)
}

handler.help = ['main']
handler.command = handler.command = /^(sc)$/i

handler.fail = null

module.exports = handler

let fetch = require('node-fetch')
let fs = require('fs')
let text = 'cobain'
let handler  = async (m, { conn }) => {
let name = await conn.getName(m.sender)
let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
const thumb = fs.readFileSync('./icon.jpeg')
function clockString(ms) {
  
}
let text = `★බොටාට කෝල් කරන්න එපා
ප්‍රශ්න අහන්න එපා.
★බොටාව බග් කරන්න එපා එකම කමාන්ඩ් එක ගහලා.
★ප්‍රශ්නයක් තියෙනවනම් ඔව්නර්ට මැසේජ් එකක් දාලා අහන්න (wa.me/94771323434).
★ඉන්බොක්ස් එන්න එපා මොනා හරි එන්නෙ නැත්තම්.
★මොනා හරි තේරෙන්නැත්තම් ඔව්නර්ට මැසේජ් එකක් දාන්න🙂 (wa.me/94771323434).
★සිංහලෙන් තියෙන එක තේරෙනවනම් පහලින් මෙනූ එක ගන්න🙂.

★අපේ ගෲප් එකට එන්න කැමති කට්ටිය මේකෙන් එන්න-https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ
〽ගෲප් රූල්ස් 〽
〽- 18+ බෑ
〽වලි බෑ
〽හැමෝටම ගරු කරන්න
〽ඇඩ්මින් සෙට් එක කියන දේ අහන්න
-IMASH NIDUSHA
 `.trim()
conn.send3ButtonImg(m.chat, thumb, text, 'ZED BOT MAIN MENU PLEASE TAP ONE', 'AGREE TO RULES', '.? menu', 'OWNER〽', '.owner', 'SCRIPT', '.sc', fkon)
}
handler.help = ['main']
handler.command = handler.command = /^(menu)$/i
handler.fail = null
module.exports = handler

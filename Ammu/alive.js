let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `බොටාට කෝල් කරන්න එපා
ප්‍රශ්න අහන්න එපා
බොටාව බග් කරන්න එපා එකම කමාන්ඩ් එක ගහලා
ප්‍රශ්නයක් තියෙනවනම් ඔව්නර්ට මැසේජ් එකක් දාලා අහන්න (wa.me/94771323434).
ඉන්බොක්ස් එන්න එපා මොනා හරි එන්නෙ නැත්තම්
මොනා හරි තේරෙන්නැත්තම් ඔව්නර්ට මැසේජ් එකක් දාන්න🙂 (wa.me/94771323434)
සිංහලෙන් තියෙන එක තේරෙනවනම් පහලින් මෙනූ එක ගන්න🙂
අපේ ගෲප් එකට එන්න කැමති කට්ටිය මේකෙන් එන්න-https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ
ගෲප් රූල්ස් - 18+ බ
වලි බෑ
හැමෝටම ගරු කරන්න
ඇඩ්මින් සෙට් එක කියන දේ අහන්න
© IMASH NIDUSHA
 `.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("non")).buffer(), devil, '© ⁨ɪͥᴛͭsᷤ ᴍᷟᴇͤ ī.am 𝜡𝛯ᗪ⁴⁰⁴⁩⁩', 'ᴀɢʀᴇᴇ ᴛᴏ ʀᴜʟᴇꜱ', '.? menu', 'ᴀɢʀᴇᴇ ʀᴜʟꜱᴇ', ',owner' )
}
handler.tags = ['main']
handler.help = ['rules']
handler.command = /^(alive)$/i
module.exports = handler
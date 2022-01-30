let handler = function (m) {
  if (!m.quoted) throw 'Reply message!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Hanya bisa menghapus pesan dariku'
  if (!isBaileys) throw 'REPLY TO A MESSAGE THAT BOT SEND!'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler

let handler = async (m, { conn, args, command }) => {

	let group = m.chat

        await m.reply('Sayonara , , ! (≧ω≦)ゞ') 

        await  conn.groupLeave(group)

        }

handler.help = ['leavegc', 'out']

handler.tags = ['owner']

handler.command = /^(out|leavegc|botout)$/i

handler.mods = true

handler.group = true

module.exports =  handler
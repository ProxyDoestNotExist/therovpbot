const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');


Asena.addCommand({pattern: 'del', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

  await message.reply_message.delete();

}));

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

// List
const AQUOTE_DESC = "It Sends Random Anime Quote"
const NEED_LOCATIONA = "*Invalid Request*"
const QUOTE = "Quote :"
const CHARACTER = "Character :"
const ANIME = "Anime :"
const NOT_FOUNDA = "```Gomen Nasai,I could not find a quote. :(```"

Asena.addCommand({pattern: 'animequote$', fromMe: false, desc: AQUOTE_DESC}, async (message, match) => {
	if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
	const url = `https://animechan.vercel.app/api/random`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🔖 ' + QUOTE +'* ```' + json.quote + '```\n\n' +
		'*🔖' + CHARACTER +'* ```' + json.character+ '```\n\n' +
		'*🔖' + ANIME +'* ```' + json.anime+ '```\n', MessageType.text, {quoted: message.data});
	} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDA, MessageType.text, {quoted: message.data});
	}
});

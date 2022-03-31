/*

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
/*const got = require('got');
const fs = require('fs');*/
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('weather');
const { errorMessage, infoMessage } = require('../helpers');

Asena.addCommand({ pattern: 'story ?(.*)', fromMe: false,  desc:"Download instagram stories of the given username"}, async (message, match) => {

	
if (match[1].includes(';')) {
        var split = match[1].split(';');
        i = split[1];
        userName = split[0];
         }
	else {
        userName = match[1];
        i = '0';
        }	
	

    if (!userName) return await message.sendMessage(errorMessage("Need username"))

    await message.sendMessage(infoMessage("Loading"))


	  
	
 /* for (var i = 0; i < (count < 100 ? count : 1); i++) {*/
          
    await axios
      .get(`http://lolhuman.herokuapp.com/api/igstory/${userName}?apikey=7cd4d26836bbc3615812c7fa`)
      .then(async (response) => {
        const {
          i,
        } = response.data.result

        const profileBuffer = await axios.get('i', {responseType: 'arraybuffer'})

	await message.sendMessage(i)
	  await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          quoted: message.data,
        })
		 	 
	 await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          quoted: message.data,
        })

      })
      /*.catch(
        async (err) => await message.client.sendMessage(message.jid,"Error", MessageType.text, {quoted: message.data}),
      )*/
  },
)

*/

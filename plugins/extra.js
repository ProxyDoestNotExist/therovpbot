/*

const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');
const TinyURL = require('tinyurl');
const Language = require('../language');
const { errorMessage, infoMessage } = require('../helpers');
const Lang = Language.getString('instagram') ;

Asena.addCommand({ pattern: 'pint ?(.*)', fromMe: false,  desc: "Gives you a pic from pinterest"}, async (message, match) => {
    
        const userName = match[1]
        
    if (!userName) return await message.sendMessage("pic of what?")

    await message.sendMessage(" ")
          
    await axios
      .get(`https://gratisancok.herokuapp.com/api/pinterest?kata=${userName}&apikey=ZailaniGans`)
      .then(async (response) => {
        const {
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `${result}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg
        })
            await message.sendMessage(message.jid, msg,MessageType.image,{quoted:message.data})
      })
      .catch(
        async (err) => await message.sendMessage(""),
      )
  },

 )

*/

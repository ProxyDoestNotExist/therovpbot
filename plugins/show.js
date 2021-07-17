/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
/*const got = require('got');
const fs = require('fs');*/
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('weather');
const { errorMessage, infoMessage } = require('../helpers');

Asena.addCommand({ pattern: 'show ?(.*)', fromMe: false , desc: "Get info related to tv series and shows"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("give me the show name"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`http://api.tvmaze.com/search/shows?q=${userName}`)
      .then(async (response) => {
        const {
          name,
          type,	
          language,
           status,
	  officialSite,
	  summary,
        } = response.data[0].show
	const {
          original,
        } = response.data[0].show.image
        
        const profileBuffer = await axios.get(original, {responseType: 'arraybuffer'})

        const plot = summary.replace(/(<([^>]+)>)/gi, "");
        
        const msg = `*${"Name"}*: ${name}\n*${"Type"}*: ${type}\n*${"Type"}*: ${status}\n*${"Summary"}*: ${plot}\n*${"Official Site"}*: ${officialSite}`
       
       await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Not Found" )),
      )
  },
)

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
/*const got = require('got');
const fs = require('fs');*/
const axios = require('axios');

Asena.addCommand({ pattern: 'joox ?(.*)', fromMe: false, dontAddCommandList: true}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORDIGTV))

    await message.sendMessage(infoMessage("Loading"))

    await axios
      .get(`https://gratisancok.herokuapp.com/api/joox/?kata=${userName}&apikey=ZailaniGans`)
      .then(async (response) => {
        const {
          mp3_url,
          judul,
	artist,
	album,	
        } = response.data.result.result

        const profileBuffer = await axios.get(mp3_url, {responseType: 'arraybuffer'})

        const msg = `${"Title"}*: ${judul}\n${"Artist"}*: ${artist}\n${"Album"}*: ${album}\n${mp3_url}`

	 await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.document)
	    await message.sendMessage(message.jid,msg, MessageType.document,)
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.Please check the song name.")),
      )
  },
)

Asena.addCommand({ pattern: 'mp3yt ?(.*)', fromMe: false, desc: "Try this if .song is not giving results"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Need a video name"))

    await message.sendMessage(infoMessage("Loading..."))

    await axios
      .get(`https://api.xteam.xyz/dl/ytmp3?url=${userName}`)
      .then(async (response) => {
        const {
          title,
          duration,
	  filesize,
	  link,	
        } = response.data.result

        const profileBuffer = await axios.get(link, {responseType: 'arraybuffer'})

        const msg = `*${"Title"}*: ${title}\n*${"Size"}*: ${size}\n*${"Duration"}*: ${duration}`
	    
        await message.sendMessage(msg)
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.document, {
         quoted : message.data
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Song Not Found!" )),
      )
  },
)

Asena.addCommand({ pattern: 'mp4yt ?(.*)', fromMe: false , desc: "Use this if .videos is not working. Paste the youtube link "}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Name the video"))

    await message.sendMessage(infoMessage("Loading..."))

  await axios
      .get(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${userName}`)
      .then(async (response) => {
        const {
          result,
          title,	
        } = response.data.result

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `*${"Title"}*: ${title}`
	    

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Not Found" )),
      )
  },
)

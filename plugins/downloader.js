const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const IGV_DESC = "Downloads Video From Instagram"
const IGI_DESC = "Downloads Image From Instagram"
const NEED_WORD = "Must Enter a link"
const FBDESC = "Downloads Video From FaceBook"
const LOADING = "Downloading the Video..."
const NOT_FOUNDFB = "Under Maintenance"
const CAPTION = "Caption"

Asena.addCommand({ pattern: 'igvideo ?(.*)', fromMe: false, desc: IGV_DESC}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage("Downloading your video..."))

    await axios
      .get(`https://api.xteam.xyz/dl/igv2?url=${userName}&APIKEY=cristian9407`)
      .then(async (response) => {
        const {
          url,
        } = response.data.result.url[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})



	await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Made By: Ask Your Mom"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Invaild Link, Please Enter a Vaild Instagram Link")),
      )
  },
)


Asena.addCommand({ pattern: 'igimage ?(.*)', fromMe: false, desc: IGI_DESC}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage("Downloading your image..."))

    await axios
      .get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${userName}&apikey=FuckBitch`)
      .then(async (response) => {
        const {
          linkdownload,
        } = response.data.result

        const profileBuffer = await axios.get(linkdownload, {responseType: 'arraybuffer'})



	await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: "Made By: Ask Your Mom"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Invaild Link, Please Enter a Vaild Instagram Link")),
      )
  },
)


Asena.addCommand({ pattern: 'fb ?(.*)', fromMe: false, desc: FBDESC }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage(LOADING))

    await axios
      .get(`https://xteam.xyz/dl/fbv2?url=https://xteam.xyz/dll/fbv2?url=${userName}&APIKEY=ab9942f95c09ca89}`)
      .then(async (response) => {
        const {
          url,
        } = response.data.result

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: "Made By: Ask Your Mom"
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(NOT_FOUNDFB )),
      )
  },
)

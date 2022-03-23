/*
# Copyright (C) 2020 MuhammedKpln.
# edited by Vai838

# WhatsAsena is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# WhatsAsena is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
#

*/

const Asena = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')


if (cn.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: true, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        const userName = match[1]

        if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios
          .get(`https://xteam.xyz/dl/igstalk?nama=${userName}&APIKEY=﻿cristian9407`)
          .then(async (response) => {
            const {
              Profile_pic,
              Username,
              Biodata,
              Jumlah_Followers,
              Jumlah_Following,
              Jumlah_Post
              Name,
            } = response.data.result

            const profileBuffer = await axios.get(Profile_pic, {
              responseType: 'arraybuffer',
            })

            const msg = `
            *${Lang.NAME}*: ${Name}
            *${Lang.USERNAME}*: ${Username}
            *${Lang.BIO}*: ${Biodata}
            *${Lang.FOLLOWERS}*: ${Jumlah_Followers}
            *${Lang.FOLLOWS}*: ${Jumlah_Following}
            *${Lang.POSTS}*: ${Jumlah_Post}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
          )
      },
    )
}
else if (cn.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'insta ?(.*)', fromMe: false, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        const userName = match[1]

        if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios
          .get(`https://xteam.xyz/dl/igstalk?nama=${userName}&APIKEY=﻿cristian9407`)
          .then(async (response) => {
            const {
              Profile_pic,
              Username,
              Biodata,
              Jumlah_Followers,
              Jumlah_Following,
              Name,
              Jumlah_Post,
            } = response.data.result

            const profileBuffer = await axios.get(Profile_pic, {
              responseType: 'arraybuffer',
            })

            const msg = `
            *${Lang.NAME}*: ${Name}
            *${Lang.USERNAME}*: ${Username}
            *${Lang.BIO}*: ${Biodata}
            *${Lang.FOLLOWERS}*: ${Jumlah_Followers}
            *${Lang.FOLLOWS}*: ${Jumlah_Following}
            *${Lang.POSTS}*: ${Jumlah_Post}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
          )
      },
    )
}

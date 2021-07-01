/* Copyright (C) 2020 TOXIC DEVIL

CODDED BY TOXIC DEVIL

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```ZINDA HU BHAI```\n\n*Dev: This Person Doesn't Exist*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Dev:This Person Does Not Exist*' })
     }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```ZINDA HU BHAI```\n\n*Dev: This Person Doesn't Exist*"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*Dev:This Person Does Not Exist*' })
     }
    }));

     Asena.addCommand({pattern: 'tools', fromMe: false, desc: Lang.TOOLS_DESC}, (async (message, match) => {
    await message.sendMessage(
        '*📲Features Added*\n-------------------------------\n\n*wanted* : ```Eg: .wanted Name;Anything```\n\n*pubg* : ```Eg: .pubg Dark;Shadow```\n\n*wood* : ```Eg: .wood Name```\n\n*bf4* : ```Eg: .bf4 Dark;Shadow```\n\n*mugflower* : ``` Eg: .mugflower Name```\n\n*narutobanner*:```Eg: .narutobanner Anything```\n\n*papperongrass*:```Eg: .papperongrass Name```\n\n*sweetcandy*:```Eg : .sweetcandy Anything```\n\n*watercolor*: ```Eg: .watercolor Anything```\n\n*coffeecup* : ```Eg: .coffeecup Anything```\n\n*sandwriting* : ```Eg: .sandwriting Anything```\n\n*cloud* : ```Eg: .cloud Anything```\n\n*phub* : ```Eg: .phub Any;text```\n\n*snow* : ```Eg: .snow DarkShadow```\n\n*blood* : ```Eg: .blood DarkShadow```\n\n*silvermetal* : ```Eg: .silvermetal Dark;Shadow```\n\n*glue* : ```Eg: .glue Anything```\n\n*galaxy* : ```Eg: .galaxy Dark;Shadow```\n\n*skull* : ```Eg: .skull Anything```\n\n*robot* : ```Eg: .robot Anything```\n\n*toxic* : ```Eg: .toxic Anything```\n\n*bow* : ```Eg: .bow Anything```\n\n*orangeglass* : ```Eg: .orangeglass Anything```' , MessageType.text
        );
    }));
    
    
    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}

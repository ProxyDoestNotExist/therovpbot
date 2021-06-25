/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

MayaBoT - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const Axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```Tanrı Türk\'ü Korusun. 🐺 Asena Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Telegram Group:* https://t.me/AsenaSupport\n*Telegram Channel:* https://t.me/asenaremaster\n*Plugin Channel:* ' + Config.CHANNEL , MessageType.text);
        }
        else {
            const pow = '*Powered by MayaBoT*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            await message.client.sendMessage(message.jid,'```Tanrı Türk\'ü Korusun. 🐺 Maya Hizmetinde!```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n*Insta:* https://instagram.com/mu.fazil_\n*Plugin Channel:* ' + Config.CHANNEL, MessageType.text);
        }
        else {
            const pow = '*Powered by MayaBoT*'
            const payload = Config.ALIVEMSG
            const status = await message.client.getStatus()
            const ppUrl = await message.client.getProfilePicture() 
            const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})

            if (!payload.includes('{pp}')) {
                await message.client.sendMessage(message.jid,payload.replace('{version}', Config.VERSION).replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow, MessageType.text);
            }
            else if (payload.includes('{pp}')) {
                await message.sendMessage(Buffer(resim.data), MessageType.image, { caption: payload.replace('{version}', Config.VERSION).replace('{pp}', '').replace('{info}', `${status.status}`).replace('{plugin}', Config.CHANNEL) + '\n' + pow });
            }
        }
    }));

    Asena.addCommand({pattern: 'tools', fromMe: false, desc: Lang.TOOLS_DESC}, (async (message, match) => {
    await message.sendMessage(
        '*📲Features Added*\n-------------------------------\n\n*.lovelogo* : ```Eg: .loveimage Rohith```\n\n*.wanted* : ```Make Wanted Poster```\n     ```Eg: .wanted Name;Anything```\n\n*.pubg* : ```Your text like PUBG game```\n ```Eg: .pubg Fazo;Bot```\n\n*.burnpaper* : ```To male a cool Text Image```\n     ```Eg : .burnpaper Name```\n\n*.wood* : ```Eg: .wood Rohith```\n\n*.bf4* : ```Eg: .pb4 Rohith```\n\n*.candlemug* : ``` Eg: .candlemug Rohith```\n\n*.mugflower* : ``` Eg: .mugflower Rohith```\n\n*.narutobanner*:```Eg: .narutobanner Rohith```\n\n*.papperongrass*:```Eg: .papperongrass Rohith```\n\n*.romancetxt*: ```Eg: .romancetxt Rohith```\n\n*.underwatertxt*:```Eg: .underwatertxt Rohith```\n\n*.sweetcandy*:```Eg : .sweetcandy Rohith```\n\n*.shadow*: ```Eg: .shadow Rohith```\n\n*.8bit*: ```Eg: .8bit Fazo```\n\n*.glitch*: ```Eg: .glitch Fazo```\n\n*.3dtext*: ```Eg: .3dtext Fazo```\n\n*.neonlight*: ```Eg: .neonlight Fazo```\n\n*.ninjalogo*: ```Eg: .ninjalogo Fazo```\n\n*.watercolor*: ```Eg: .watercolor Fazo```\n\n*.sparkling*: ```Eg: .sparkling FazoFaz```\n\n*.harrypotter*: ```Eg: .harrypotter Fazo```*' , MessageType.text
        );
    }));

    Asena.addCommand({pattern: 'tools2', fromMe: false, desc: Lang.TOOLS_DESC}, (async (message, match) => {
     await message.sendMessage(
        '*🖌️Text Tools*\n\n *sandwriting*\n*cloud :* .cloud Fazil\n*phub :* .phub Any;text\n*snow*\n*blood*\n*luxury*\n*gradient*\n*vintagi*\n*summery*\n*darkgold*\n*1917*\n*holo*\n*silver*\n*blue*\n*fabric*\n*avengers*\n*logomarvel*\n*silvermetal*\n*glue*\n*balloon*\n*rosegold*\n*metalgold*\n*lion*\n*galaxy*\n*logojocker*\n*leaves*\n*skull*\n*robot*\n*toxic*\n*bow*\n*orangeglass*\n*marvel*' , MessageType.text
        );
    }));

    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}

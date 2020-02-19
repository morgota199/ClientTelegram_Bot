const BOT = require('node-telegram-bot-api'),
      config = require('config'),
      { idSend } = require('../Client/index')

const bot = new BOT(config.get("TOKEN"), { polling: true })

bot.on("message", async (msg) => {
    try {
        const id = await idSend(config.get("BOT_ID"), msg.text)
        return await bot.sendDocument(msg.from.id, id)
    } catch (e) {
        await bot.sendMessage(msg.chat.id, e.message)
    }
})
const { Telegraf } = require('telegraf');

const bot = new Telegraf('7370367144:AAFAkEqkL40Ls2IqHggnyeiq2y5f_SILkvA');

bot.start((ctx) => {
    ctx.reply('Привет! Я бот, как могу помочь?');
});
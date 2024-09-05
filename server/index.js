const TelegramBot = require('node-telegram-bot-api');

const token = '7370367144:AAFAkEqkL40Ls2IqHggnyeiq2y5f_SILkvA';
const webAppUrlHome = 'https://denisnasekin.github.io/app-tg/#/';
const webAppUrlWeather = 'https://denisnasekin.github.io/app-tg/#/weather';
const webAppUrlArticles = 'https://denisnasekin.github.io/app-tg/#/article';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Welcome to my bot!', {
            reply_markup: {
                keyboard: [
                    [{ text: 'Home', web_app: { url: webAppUrlHome } }],
                    [{ text: 'Weather', web_app: { url: webAppUrlWeather } }],
                    [{ text: 'Articles', web_app: { url: webAppUrlArticles } }]
                ]
            }
        });
    }
});
const TelegramBot = require('node-telegram-bot-api');

const token = '6529945909:AAEj6Exy95DuR5_J72_D3ht2DUzrvTGzOfQ';
const bot = new TelegramBot(token, {polling: true});

async function handleMessage(msg) {
  const chatId = msg.chat.id;

  try {
    // simulate some async work
    await new Promise(resolve => setTimeout(resolve, 1000));

    bot.sendMessage(chatId, 'Received your message: ' + msg.text);
  } catch (err) {
    console.error(err);
  }
}

bot.on('message', async (msg) => {
  await handleMessage(msg);
});

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Токен и chat_id для Telegram
const TELEGRAM_BOT_TOKEN = '8159385974:AAHNeuv3WtFdadOcCF6lUaXL1ua70ty6h9U';
const TELEGRAM_CHAT_ID = '-4784511743';

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/send', async (req, res) => {
    console.log(req);
    const { name, email, message } = req.body;
    console.log('Полученные данные:', { name, email, message });

    if (!name || !email || !message) {
        console.error('Недостаточно данных для отправки.');
        return res.status(400).send('Пожалуйста, заполните все поля.');
    }

    const text = `📝 Новое сообщение с сайта:
    👤 Имя: ${name}
    📧 Email: ${email}
    💬 Сообщение: ${message}`;
    try {
        const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: 'Markdown',
        });
        res.send('Сообщение отправлено!');
    } catch (err) {
        console.error('Ошибка при отправке в Telegram:', err);
        if (err.response) {
            console.error('Ответ от Telegram API:', err.response.data);
        }
        res.status(500).send('Ошибка при отправке сообщения');
    }
});
app.listen(PORT, () => {
    console.log(`Сервер работает на http://localhost:${PORT}`);
});

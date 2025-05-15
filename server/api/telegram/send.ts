export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, message } = body

    if (!name || !email || !message) {
        return createError({ statusCode: 400, statusMessage: 'Заполните все поля' })
    }

    const config = useRuntimeConfig()

    const text = `📝 Новое сообщение с сайта:
👤 Имя: ${name}
📧 Email: ${email}
💬 Сообщение: ${message}`

    try {
        const response = await $fetch(`https://api.telegram.org/bot${config.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            body: {
                chat_id: config.TELEGRAM_CHAT_ID,
                text,
                parse_mode: 'Markdown'
            }
        })
        return { ok: true }
    } catch (error) {
        return createError({ statusCode: 500, statusMessage: 'Ошибка отправки сообщения' })
    }
})

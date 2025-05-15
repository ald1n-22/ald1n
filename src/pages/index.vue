<template>
    <form @submit.prevent="submitForm">
        <label>Имя:
            <input v-model="form.name" type="text" required />
        </label>

        <label>Email:
            <input v-model="form.email" type="email" required />
        </label>

        <label>Сообщение:
            <textarea v-model="form.message" required></textarea>
        </label>

        <button type="submit" :disabled="loading">
            {{ loading ? 'Отправляем...' : 'Отправить' }}
        </button>
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
    name: '',
    email: '',
    message: ''
})
const loading = ref(false)

async function submitForm() {
    loading.value = true
    try {
        await $fetch('localhost:3000/api/telegram/send', {
            method: 'POST',
            body: form
        })
        alert('Сообщение отправлено!')
        form.name = ''
        form.email = ''
        form.message = ''
    } catch (e) {
        alert('Ошибка при отправке сообщения')
        console.error(e)
    } finally {
        loading.value = false
    }
}
const config = useRuntimeConfig()

console.log(config.TELEGRAM_BOT_TOKEN)      // токен бота — серверный
console.log(config.public.TELEGRAM_CHAT_ID) 
</script>

<style lang="scss"></style>
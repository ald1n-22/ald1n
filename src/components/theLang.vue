<template>
    <div class="lang">
        <div class="lang__val" @click="openClose()">{{ curLang }}</div>
        <div class="lang__list" :class="{ active: bool }">
            <li class="lang__item" v-for="(item, idx) in langList" :key="idx">{{ item.title }}</li>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const langList = [
    {
        lang: 'ru',
        title: 'RU',
        icon: ''
    },
    {
        lang: 'en',
        title: 'EN',
        icon: ''
    }
]
let curLang = langList[0].title
let bool = ref(false)
function openClose() {
    bool.value = !bool.value
}
</script>

<style lang="scss">
.lang {
    position: relative;

    &__list {
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translate(-50%, 100%);
        box-shadow: 0 0px 5px rgba(0, 0, 0, 0.2);
        background: $c-1;
        display: flex;
        flex-direction: column;
        opacity: 0;

        &.active {
            opacity: 1;
        }
    }

    &__item {
        font-size: 1.4rem;
        cursor: pointer;
        padding: 0.5rem 1rem;
        color: $c-2;

        &:hover {
            background: rgba($color: $c-2, $alpha: 0.2);
        }
    }

    &__val {
        color: $c-2;
        font-size: 1.4rem;
        cursor: pointer;
    }
}
</style>
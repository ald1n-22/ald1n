<script lang="ts" setup>
import Logo from './Logo.vue';
import theLang from './theLang.vue';

</script>

<template>
    <header class="header">
        <div class="header__inner container">
            <Logo />
            <!-- <nav class="nav">
                <NuxtLink to="/" class="nav__link">Главная</NuxtLink>
                <NuxtLink to="/contacts" class="nav__link">Контакты</NuxtLink>
            </nav> -->
            <theLang />
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background: rgba($color: $c-1, $alpha: 0);
    padding: 1rem 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

  

}
</style>

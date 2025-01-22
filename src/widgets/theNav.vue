<template>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item"></li>
        </ul>
    </nav>
</template>
<script setup>

</script>
<style lang="scss">
.nav {
    height: 100vh;
    background: #FAFAFA;
    position: sticky;
    top: 0;

    &__list {
        display: flex;
        flex-direction: column;
    }

    &__item {
        width: 40px;
        height: 40px;
    }
}
</style>
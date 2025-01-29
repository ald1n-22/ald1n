<template>
    <nav class="nav">
        <Menu />
    </nav>
</template>
<script setup>
import Menu from '@/components/Menu.vue';


</script>
<style lang="scss">
.nav {
    height: 100vh;
    background: #FAFAFA;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
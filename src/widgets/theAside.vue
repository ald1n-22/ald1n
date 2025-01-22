<template>
    <aside class="aside">
        <Profile />
    </aside>
</template>
<script setup>
import Profile from '@/components/Profile.vue'
</script>
<style lang="scss">
.aside {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #FAFAFA;
    padding: 30px 20px;
}
</style>
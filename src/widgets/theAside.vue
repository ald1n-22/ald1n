<template>
    <aside class="aside">
        <Profile />
        <Socials />
        <div class="line"></div>
        <Skills />
    </aside>
</template>
<script setup>
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue';
import Socials from '@/components/Socials.vue';
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
    overflow-y: auto;
}
</style>
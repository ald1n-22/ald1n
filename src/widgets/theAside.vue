<template>
    <aside class="aside">
        <Profile />
      
        <ProfileInfo />
        <span class="line"></span>
        <Skills />
        <ExtraSkills />
    </aside>
</template>
<script setup>
import ExtraSkills from '@/components/ExtraSkills.vue';
import Profile from '@/components/Profile.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'
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
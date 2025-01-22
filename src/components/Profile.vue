<template>
    <div class="profile">
        <div class="profile__img"><img src="../assets/img/profile.webp" alt=""></div>
        <div class="profile__name">Alladdin Kurbanbaev</div>
        <div class="profile__prof">Font-end Developer</div>
    </div>
</template>
<script setup>
</script>
<style lang="scss">
.profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;

    &__name {
        font-size: 18px;
        font-weight: 600;
        margin-top: 15px;
    }

    &__prof {
        font-size: 15px;
        color: #767676;
    }

    &__img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
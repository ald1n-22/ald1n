<template>
    <ul class="socials">
        <li><a target="_blank" href="https://www.instagram.com/alladdin_kurbanbaev" title="instagram"
                class="socials__link"><img src="../assets/img/icon/instagram.svg" alt=""></a></li>
        <li><a target="_blank" href="https://www.linkedin.com/in/ald1n/" title="linkedin" class="socials__link"><img
                    src="../assets/img/icon/linkedin.svg" alt=""></a></li>
        <li><a target="_blank" href="https://t.me/alld1n" title="telegram" class="socials__link"><img
                    src="../assets/img/icon/telegram.svg" alt=""></a></li>
        <li><a target="_blank" href="tel:+998913762505" title="phone" class="socials__link"><img
                    src="../assets/img/icon/phone.svg" alt=""></a></li>
    </ul>
</template>
<script setup>

</script>
<style lang="scss">
.socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 15px 0 25px 0;

    &__link {
        width: 24px;
        height: 24px;
        background: #FFB400;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 14px;
            height: 14px;
        }
    }
}
</style>
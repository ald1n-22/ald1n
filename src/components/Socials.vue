<template>
    <ul class="socials">
        <li><a href="#" class="socials__link"><img src="../assets/img/icon/facebook.svg" alt=""></a></li>
        <li><a href="#" class="socials__link"><img src="../assets/img/icon/instagram.svg" alt=""></a></li>
        <li><a href="#" class="socials__link"><img src="../assets/img/icon/linkedin.svg" alt=""></a></li>
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
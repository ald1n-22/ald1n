<template>
    <section class="about" id="home">
        <h2 class="about__title">
            Я Курбанбаев Алладдин<br>
            <span>Front-end</span>
            Developer
        </h2>
        <p class="about__desc">
            Я Фрилансер и Веб разработчик. Я стремлюсь создавать захватывающие и красивые <br> веб сайты и приложении ,
            тщательно
            продуманный код и удобста <br> для пользователю при использований моих веб приложении.
        </p>
    </section>
</template>
<script setup>

</script>
<style lang="scss">
.about {
    background: #FAFAFA;
    padding: 60px;

    &__title {
        font-size: 36px;
        font-weight: 600;

        span {
            color: #FFB400;
        }
    }

    &__desc {
        color: #767676;
        margin-top: 15px;
    }
}
</style>
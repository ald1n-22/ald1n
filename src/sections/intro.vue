<template>
    <section class="intro">
        <div class="intro__inner container">
            <h1 class="intro__title">Разработка сайта</h1>
            <button class="btn">Заказать</button>
        </div>
    </section>
</template>

<script>

</script>

<style lang="scss">
.intro {
    height: 100vh;
    background: url('/img/intro.png') rgba($color: $c-1, $alpha: 0.4);
    background-blend-mode: darken;

    &__inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
        height: 100%;
    }

    &__title {
        font-size: 12rem;
        color: $c-2;
        font-weight: 300;
        line-height: 100%;
        font-family: 'Arial';
    }
}
</style>
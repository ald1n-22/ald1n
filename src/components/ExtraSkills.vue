<template>
    <div class="extra">
        <span class="extra__title">
            Extra Skills
        </span>
        <ul class="extra__list">
            <li class="extra__list-item" v-for="(item, idx) in extra" :key="idx">
                <img src="../assets/img/icon/extra.svg" alt="">
                <p>{{ item.list.join(',') }}</p>
            </li>
        </ul>
    </div>
</template>
<script setup>
const extra = [
    {
        list: ['less, git, gsap']
    },
]
</script>
<style lang="scss">
.extra {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 25px 0;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 5px;

        &-item {
            display: flex;
            gap: 15px;
            p {
                font-size: 15px;
                color: #767676;
            }
        }
    }
}
</style>
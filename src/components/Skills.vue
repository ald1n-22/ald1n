<template>
    <ul class="skills">
        <li class="skills__item" v-for="( items, idx ) in skills" :key="idx">
            <span class="skills__title">{{ items.title }}</span>
            <ul class="skills__list">
                <li class="skills__list-item" v-for="(el, i) in items.list" :key="i">
                    <span class="skills__name">{{ el.title }}</span>
                    <span class="skills__per">{{ el.per }}%</span>
                    <div class="skills__line">
                        <div class="skills__line-thumb" :style="{ width: el.per + '%' }"></div>
                    </div>
                </li>
            </ul>
            <div class="line"></div>
        </li>
    </ul>
</template>
<script setup>
const skills = [
    {
        title: 'Languages',
        list: [
            {
                title: 'Русский',
                per: 100
            },
            {
                title: 'Каракалпакский',
                per: 100
            },
            {
                title: 'Английский',
                per: 10
            },
        ]
    },
    {
        title: 'Skills',
        list: [
            {
                title: 'HTML',
                per: 90
            },
            {
                title: 'CSS',
                per: 85
            },
            {
                title: 'JS',
                per: 60
            },
            {
                title: 'VUE',
                per: 50
            },
            {
                title: 'GSAP',
                per: 70
            },
        ]
    },
]
</script>
<style lang="scss">
.skills {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    &__title {
        font-size: 18px;
        font-weight: 600;
    }

    &__list {
        margin: 15px 0 25px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-item {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 6px;
        }
    }

    &__name {
        font-size: 15px;
        color: #767676;
    }

    &__per {
        display: flex;
        justify-content: flex-end;
    }

    &__line {
        display: flex;
        width: 100%;
        border: 1px solid #FFB400;
        grid-column: span 2;
        border-radius: 4px;

        &-thumb {
            height: 2px;
            margin: 1px;
            border-radius: 4px;
            background: #FFB400;
        }
    }
}
</style>
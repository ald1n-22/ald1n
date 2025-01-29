<template>
    <section class="store">
        <div class="store__list" :id="'sec-' + idx" v-for="(item, idx) in store" :key="idx">
            <h3 class="store__title title">{{ item.title }}</h3>
            <!-- <p class="store__desc desc">{{ item.desc }}</p> -->
            <div class="store__info" v-for="(info, i) in item.list" :key="i">
                <h4 class="store__info-title">{{ info.place }}</h4>
                <h4 class="store__info-sert">{{ info.sert }}</h4>
                <p class="store__info-whos">{{ info.whom }}<span class="store__info-date">{{ info.date }}</span></p>
                <p class="store__info-desc desc">{{ info.desc }}</p>
                <div class="line"></div>
            </div>


        </div>
    </section>
</template>
<script setup>
const store = [
    {
        title: 'Образование',
        list: [
            {
                place: 'Автодорожный колледж ',
                whom: 'Студент',
                date: 'Сентябрь 2016 - Июнь 2019',
                sert: 'Сертификат',
                desc: 'Нукусский Автодорожный колледж ,  "Ремонт и пользование автомобилей".'
            },
            {
                place: 'Novastudio',
                whom: 'Стажировка',
                date: 'Январь 2020 - Май 2020',
                sert: 'Стажировка',
                desc: 'Верстка сайтов по дизайну.'
            },
            {
                place: 'Proweb',
                whom: 'Студент',
                date: 'Арпель 2021 - Январь 2022',
                sert: 'Сертификат',
                desc: 'Разработка веб-приложений по стэкам HTML,CSS,JS,VUE (9 месячный курс)'
            },

        ]
    },
    {
        title: 'Опыт работы',
        list: [
            {
                place: 'Фотосалон Мир Фото',
                whom: 'Фотограф,Типограф',
                date: 'Март 2021 - Декабрь 2021',
                sert: 'Фотограф,Типограф',
                desc: 'Распечатка разных материалов, фото на документы, фото на рамки, монтаж фотографий.'
            },
            {
                place: 'Proweb',
                whom: 'Администратор',
                date: 'Январь 2022 - Май 2020',
                sert: 'Коворкинг',
                desc: 'Помощь в изучений ученикам учебного центра по направлению фронтенд , бронь учеников в коворкинг'
            },
            {
                place: 'AX Digital',
                whom: 'Разработчик',
                date: 'Сентябрь 2022 - Декабрь 2022',
                sert: 'Стажировка',
                desc: 'Изучение верстки веб сайтов с анимациями и оптимизация'
            },
            {
                place: 'AX Digital',
                whom: 'Разработчик',
                date: 'Декабрь 2022 - Сентрябрь 2023',
                sert: 'Верстальщик',
                desc: 'Разработка и оптимизация веб сайтов с анимациями'
            },
            {
                place: 'AX Texnology',
                whom: 'Разработчик',
                date: 'Сентябрь 2023 - Настоящее время',
                sert: 'Фронтенд',
                desc: 'Разработка и оптимизация веб сайтов с анимациями'
            },

        ]
    },
]
</script>
<style lang="scss">
.store {
    display: flex;
    flex-direction: column;
    gap: 70px;
    padding: 70px 0;

    &__title {
        margin-bottom: 40px;
    }


    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
    }

    &__info {
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        gap: 25px;
        text-align: left;
        background: #FAFAFA;
        padding: 45px 35px;
        width: 100%;

        @media(max-width:1620px) {
            grid-template-columns: 1fr 2fr;

        }

        &:nth-of-type(n+2) {
            padding-top: 0;
        }

        &:last-of-type {
            .line {
                display: none;
            }
        }

        &-title,
        &-sert {
            font-size: 18px;
            color: #2b2b2b;
            font-weight: 500;
        }

        &-whos {
            font-size: 15px;
            color: #2b2b2b;
            font-weight: 400;
            display: flex;
            align-items: center;
            gap: 20px;
            height: max-content;
        }

        &-date {
            font-size: 11px;
            font-weight: 400;
            color: #fff;
            padding: 4px 7px;
            background: #FFB400;
            border-radius: 2px;
            height: max-content;
            white-space: nowrap;
        }

        .line {
            grid-column: span 2;
            margin-top: 20px;
        }
    }
}
</style>
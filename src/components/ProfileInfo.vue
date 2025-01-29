<template>
    <div class="profile-info">
        <ul class="profile-info__list">
            <li class="profile-info__list-item">
                <span>Age:</span>
                <p>25</p>
            </li>
            <li class="profile-info__list-item">
                <span>Freelance:</span>
                <p class="success">Available</p>
            </li>
            <li class="profile-info__list-item">
                <span>Address:</span>
                <p>Uzbekistan, Tashkent</p>
            </li>
        </ul>
    </div>
</template>
<script setup>

</script>
<style lang="scss">
.profile-info {
    padding: 25px 0;

    &__list {
        display: flex;
        flex-direction: column;
        gap: 10px;

        &-item {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span {
                display: inline-block;
                padding: 1px 8px 1px 5px;
                background: #FFB400;
            }

            p {
                font-weight: 300;
                color: #2B2B2B;
                font-size: 15px;
            }
        }
    }
}
</style>
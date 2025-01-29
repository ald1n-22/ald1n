<template >
    <menu class="menu">
        <ul class="menu__list">
            <li class="menu__item">
                <a class="menu__link" :class="activeSection == 'home' ? 'active' : ''" href="#home"
                    @click="activeMenu('home')">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_588)">
                            <path
                                d="M15 14.9999C15 15.1989 14.921 15.3896 14.7803 15.5303C14.6397 15.6709 14.4489 15.7499 14.25 15.7499H3.75C3.55109 15.7499 3.36032 15.6709 3.21967 15.5303C3.07902 15.3896 3 15.1989 3 14.9999V8.24994H0.75L8.49525 1.20894C8.63333 1.0833 8.81331 1.01367 9 1.01367C9.18669 1.01367 9.36667 1.0833 9.50475 1.20894L17.25 8.24994H15V14.9999Z"
                                fill="#767676" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_588">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </li>
            <li class="menu__item">
                <a class="menu__link" :class="activeSection == 'sec-0' ? 'active' : ''" href="#sec-0"
                    @click="activeMenu('sec-0')">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_596)">
                            <path
                                d="M12.7636 11.272L9.25 14.6259L5.73638 11.272C3.10301 11.381 1 13.4376 1 15.9759V16.3134C1 17.245 1.79185 18.0009 2.76786 18.0009H15.7321C16.7081 18.0009 17.5 17.245 17.5 16.3134V15.9759C17.5 13.4376 15.397 11.381 12.7636 11.272ZM1.50089 2.80635L1.73661 2.85909V4.91221C1.47879 5.05987 1.29464 5.31651 1.29464 5.62589C1.29464 5.9212 1.46406 6.16729 1.70346 6.31846L1.12891 8.5087C1.06629 8.75128 1.20625 9.00089 1.40882 9.00089H2.94833C3.15089 9.00089 3.29085 8.75128 3.22824 8.5087L2.65368 6.31846C2.89308 6.16729 3.0625 5.9212 3.0625 5.62589C3.0625 5.31651 2.87835 5.05987 2.62054 4.91221V3.06299L5.05134 3.62198C4.7346 4.22667 4.53571 4.90167 4.53571 5.62589C4.53571 8.11143 6.64609 10.1259 9.25 10.1259C11.8539 10.1259 13.9643 8.11143 13.9643 5.62589C13.9643 4.90167 13.7691 4.22667 13.4487 3.62198L16.9954 2.80635C17.6657 2.65166 17.6657 1.85362 16.9954 1.69893L9.98292 0.0817384C9.50413 -0.0272461 8.99955 -0.0272461 8.52076 0.0817384L1.50089 1.69541C0.834263 1.8501 0.834263 2.65166 1.50089 2.80635Z"
                                fill="#767676" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_596">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
            </li>
            <li class="menu__item">
                <a class="menu__link" :class="activeSection == 'sec-1' ? 'active' : ''" href="#sec-1"
                    @click="activeMenu('sec-1')">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_600)">
                            <path
                                d="M6.75 9.75V12H11.25V9.75H16.5V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V9.75H6.75ZM8.25 8.25H9.75V10.5H8.25V8.25ZM5.25 3.75V1.5C5.25 1.30109 5.32902 1.11032 5.46967 0.96967C5.61032 0.829018 5.80109 0.75 6 0.75H12C12.1989 0.75 12.3897 0.829018 12.5303 0.96967C12.671 1.11032 12.75 1.30109 12.75 1.5V3.75H15.75C15.9489 3.75 16.1397 3.82902 16.2803 3.96967C16.421 4.11032 16.5 4.30109 16.5 4.5V8.25H11.25V6.75H6.75V8.25H1.5V4.5C1.5 4.30109 1.57902 4.11032 1.71967 3.96967C1.86032 3.82902 2.05109 3.75 2.25 3.75H5.25ZM6.75 2.25V3.75H11.25V2.25H6.75Z"
                                fill="#767676" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_600">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </a>
            </li>
        </ul>
    </menu>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const activeSection = ref('home')
const sectionId = ['home', 'sec-0', 'sec-1']
function activeMenu(val) {
    activeSection.value = val
}
function checkVisibility() {
    sectionId.forEach(id => {
        const section = document.getElementById(id)
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < 50;
        if (isInView) {
            activeMenu(id)
            section.classList.add('active')
        } else {
            section.classList.remove('active')
        }
    })
}
onMounted(() => {
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});
</script>
<style lang="scss">
.menu {
    &__list {
        display: flex;
        flex-direction: column;
        gap: 40px;

    }

    &__link {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #F0F0F6;
        transition: background 0.3s ease;

        &.active {
            background: #FFB400;

            svg {
                path {
                    fill: #2B2B2B;
                }
            }
        }

        svg {
            width: 18px;

            path {
                transition: fill 0.3s ease;
            }
        }
    }
}
</style>
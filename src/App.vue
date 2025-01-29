<script setup>
import theAside from '@/widgets/theAside.vue'
import theMain from '@/widgets/theMain.vue'
import theNav from '@/widgets/theNav.vue'
</script>
<template>
  <div class="page">
    <theAside />
    <theMain />
    <theNav />
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: grid;
  grid-template-columns: 305px 1fr 108px;
  gap: 30px;
  height: 100%;

  @media(max-width:1620px) {
    grid-template-columns: 305px 1fr 80px;
  }
}
</style>

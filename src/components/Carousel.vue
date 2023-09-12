<template>
  <el-carousel height="150px">
    <el-carousel-item v-for="(item, index) in slides" :key="index">
      <img :src="item.image" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script lang="ts">
export default {
  props: {
    slides: Array
  },
  created () {
    console.log(this.slides)
  }
}
</script>

<style lang="scss">
.VueCarousel-slide{
  img{
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
}
</style>

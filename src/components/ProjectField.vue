<template>
  <div class="ProjectField">
    <h3>最新建案 Properties</h3>
    <el-carousel indicator-position="outside">
      <el-carousel-item class="imgURL" v-for="item in banner" :key="item.id" :interval="5000" arrow="hover">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts">
export default {
  data () {
    return {
      banner: [
        { id: 1, imageUrl: 'https://mso.jsl30.com.tw/images/pc_intro.png' },
        { id: 2, imageUrl: 'https://scontent.fkhh2-1.fna.fbcdn.net/v/t1.6435-9/213827482_116253740718502_6710328823623344519_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=973b4a&_nc_ohc=AUdZVkT7sXMAX-EDmsR&_nc_ht=scontent.fkhh2-1.fna&oh=4ad36706c356ae51551f106f19d62294&oe=61625DA9' },
        { id: 3, imageUrl: 'https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.6435-9/135510885_1099445480499320_2693139345896484127_n.png?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=fyBAFU4g3EoAX_VF3I8&_nc_ht=scontent.fkhh1-1.fna&oh=e7c360d99cd8030e084ef58a1f6e7e13&oe=617C6018' }
      ]
    }
  }
}
</script>
<style lang="scss">
.ProjectField{
  max-width: 1080px;
  margin: 60px auto;
  h3{
    text-align: center;
    font-weight: 900;
    line-height: 2;
  }
  .imgURL{
    display: flex;
    justify-content: center;
    img{
      max-width: 100%;
      object-fit: contain;
    }
  }
}
</style>

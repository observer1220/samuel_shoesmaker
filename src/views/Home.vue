<template>
  <div class="index_container">
    <div class="parallax_scroll">
      <!-- <img src="../assets/about_banner3.jpg" alt=""> -->
    </div>
    <Carousel :slides="slides" />
    <PictureField/>
    <div style="display:flex;justify-content:center;">
      <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsamuel.shoemaker29%2Fvideos%2F466428990389982%2F&show_text=false&width=560&t=0" width="900" height="420" style="border:none;overflow:hidden;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
  </div>
</template>
<script lang="ts">
import Carousel from '../components/Carousel.vue'
import PictureField from '../components/PictureField.vue'
export default {
  components: {
    Carousel,
    PictureField
  },
  data () {
    return {
      slides: [
        {
          id: 1,
          image: '../assets/slides/1.jpg'
        },
        {
          id: 2,
          image: '../assets/slides/2.jpg'
        },
        {
          id: 2,
          image: '../assets/slides/3.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.index_container{
  position: relative;
  margin: 70px auto;
  .parallax_scroll{
    img{
      width: 100%;
      object-fit: contain;
    }
    animation: animation 1s linear;
    @keyframes animation {
      from {
        background-position: 0% 100%;
        opacity: 0;
      }
      to {
        background-position: 0% 0%;
        opacity: 1;
      }
    }
  }
}
</style>

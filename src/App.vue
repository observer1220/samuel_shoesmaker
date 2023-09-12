<script setup lang="ts">
import HeadNav from './components/HeadNav.vue'
// import Footer from './components/Footer.vue'

function scrollTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// function isLogin () {
  // return this.$store.state.isLogin
// }
</script>

<template>
  <div id="app">
    <HeadNav></HeadNav>
    <router-view/>
    <!-- 登入狀態隱藏Footer -->
    <!-- <Footer v-show="isLogin == false"></Footer> -->
    <div class="scrollTop">
      <img  @click="scrollTop" src="../src/assets/scrollTop.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  min-height: 100%;
  user-select: none;
  position: relative;
  font-family: 'Marcellus', 'Noto Sans TC', "Microsoft JhengHei";
  color: black;
  background: #FEF8F2;
  #nav {
    a {
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
      color: black;
      &.router-link-exact-active {
        color: #E87C19;
      }
    }
  }
}
.scrollTop{
  position: fixed;
  right: 0;
  bottom: 0;
  border: none;
  cursor: pointer;
  img{
    width: 50px;
  }
}
</style>
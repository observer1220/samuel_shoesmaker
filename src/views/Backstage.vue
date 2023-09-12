<template>
  <div class="index">
    <LeftMenu></LeftMenu>
    <div class="rightContainer">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import LeftMenu from '../components/LeftMenu.vue'
export default {
  components: {
    LeftMenu
  }
}
</script>
<style>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
  background: white;
}
.rightContainer {
  min-height: 100%;
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 70px);
  overflow: auto;
}
</style>

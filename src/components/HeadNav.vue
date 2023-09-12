<template>
  <div class="topbar">
    <div class="logo">
    <img src="../assets/Logo.jpg" alt="">
    <a href="/" >
      <h1>Samuel鞋匠工坊</h1>
    </a>
    </div>
    <div id="nav">
      <router-link to="/about">
        <span class="cName">關於我們</span>
        <span class="eName">About</span>
      </router-link>
      <router-link to="/service">
        <span class="cName">服務項目</span>
        <span class="eName">Service</span>
      </router-link>
      <router-link to="/customized">
        <span class="cName">客製化皮件</span>
        <span class="eName">Customized</span>
      </router-link>
      <router-link to="/process">
        <span class="cName">維修流程</span>
        <span class="eName">Process</span>
      </router-link>
      <router-link to="/articles">
        <span class="cName">主題文章</span>
        <span class="eName">Articles</span>
      </router-link>
    </div>
    <el-row class="rwdMenu">
      <el-col>
        <el-dropdown trigger="click">
          <span class="cName">開啟選單</span>
          <span class="eName">Menu</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/about" class="rwdMenuLink">
                <span class="cName">關於我們</span>
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/news" class="rwdMenuLink">
                <span class="cName">服務項目</span>
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/news" class="rwdMenuLink">
                <span class="cName">客製化皮件</span>
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/process" class="rwdMenuLink">
                <span class="cName">維修流程</span>
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/articles" class="rwdMenuLink">
                <span class="cName">主題文章</span>
              </router-link>
            </el-dropdown-item>
            <!-- <el-dropdown-item>
              <router-link v-show="isLogin === false" to="/users" class="rwdMenuLink">
                <span class="cName">員工專區</span>
              </router-link>
            </el-dropdown-item> -->
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    logouts () {
      // 設定localStorage
      localStorage.removeItem('operationType')
      localStorage.removeItem('uid')
      // 設定Vuex
      // this.$store.state.isLogin = false
      // 跳轉頁面
      this.$router.push('/')
    }
  },
  computed: {
    isLogin () {
      // return this.$store.state.isLogin
    }
  }
}
</script>

<style lang="scss">
.topbar{
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  z-index: 99;
  background: white;
  height: 70px;
  opacity: 0.8;
  border-bottom: 3px solid rgba(92, 7, 7, 0.863);
  /* border-image: url('../assets/leather_border.png') round 30; */
  #nav{
    display: flex;
    align-items: center;
    a{
      margin-right: 15px;
      .cName{
        display: block;
      }
      .eName{
        display: flex;
        justify-content: center;
        font-size: 12px;
      }
    }
  }
  .logo{
    display: flex;
    align-items: center;
    text-decoration: none;
    h1{
      font-weight: 900;
    }
    img{
      width: 80px;
      /* height: 50px; */
    }
    a{
      text-decoration: none;
      color: black;
    }
  }
  .logouts{
    padding: 5px;
    font-size: 20px;
    font-weight: 900;
    color: black;
    border: none;
    background: none;
    line-height: 1.45;
    .cName{
      display: block;
    }
    .eName{
      display: flex;
      justify-content: center;
      font-size: 12px;
    }
  }
  .rwdMenu{
    display: none;
    align-items: center;
    border: none;
    font-weight: 900;
    .cName{
      display: block;
      font-size: 18px;
    }
    .eName{
      display: flex;
      justify-content: center;
      font-size: 12px;
    }
  }
}

@media (min-width:320px) and (max-width:767px) {
  .topbar{
    #nav{
      display: none;
    }
    .rwdMenu{
      display: flex;
      .cName{
        color: black;
      }
      .eName{
        color: black;
      }
    }
  }
  .rwdMenuLink{
    text-decoration: none;
    color: black;
  }
}
</style>

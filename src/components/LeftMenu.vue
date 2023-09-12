<template>
  <el-row class="menu_page">
    <el-col>
      <el-menu mode="vertical" background-color="#3b3b3b" text-color="#fff"
        active-text-color="#409eff" class="el-menu-vertical-demo" unique-opened :collapse="isCollapse">
          <router-link to="/backstage">
            <el-menu-item index="0">
              <i class="fa fa-margin fa-home"></i>
              <span slot="title">首頁</span>
            </el-menu-item>
          </router-link>
          <template v-for="item in items">
            <el-submenu v-if="item.children" :index="item.path" :key="item.path">
              <template slot="title">
                <i :class="'fa fa-margin '+item.icon"></i>
                <span slot="title">{{ item.name }}</span>
              </template>
              <router-link v-for="(citem, cindex) in item.children" :to="citem.path" :key="cindex">
                <el-menu-item :index='citem.path'>
                  <span slot="title">{{ citem.name }}</span>
                </el-menu-item>
              </router-link>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
  </el-row>
</template>

<script lang="ts">
export default {
  data () {
    return {
      items: [
        {
          icon: 'fa-id-card',
          name: '系統資料建檔',
          path: 'create',
          children: [
            {
              name: '廠商列表',
              path: 'card'
            },
            {
              name: '員工列表',
              path: 'emp'
            },
            {
              name: '權限管理',
              path: 'role'
            }
          ]
        },
        {
          icon: 'el-icon-s-tools',
          name: '設定',
          path: 'setting',
          children: [
            {
              name: '語言',
              path: 'language'
            }
          ]
        }
      ],
      arr: [],
      orderByName: []
    }
  },
  computed: {
    user () {
      // return this.$store.getters.user
    },
    isCollapse () {
      // return this.$store.state.isCollapse
    }
  }
}
</script>
<style>
  .menu_page {
    position: fixed;
    top: 90px;
    left: 0;
    min-height: 100%;
    background-color: #3b3b3b;
    z-index: 99;
  }
  .el-menu {
    border: none;
  }
  .fa-margin {
    margin-right: 5px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 530px;
  }
  .el-menu-vertical-demo {
    width: 55px;
  }
  .el-submenu .el-menu-item {
    min-width: 180px;
  }
  .hiddenDropdown, .hiddenDropname {
    display: none;
  }
  a {
    text-decoration: none;
  }
</style>

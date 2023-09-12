<template>
  <el-button type="success" size ="small" @click="refresh()">更新</el-button>
</template>
<script lang="ts">
export default {
  inject: ['reload'],
  methods: {
    refresh () {
      this.reload()
    }
  }
}
</script>

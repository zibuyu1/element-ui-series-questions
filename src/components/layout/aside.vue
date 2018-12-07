<template>
  <div id="aside_menu">
    <div class="portrait_wrap">
      <div class="portrait">
        <img src="../../assets/logo.png" alt="">
      </div>
    </div>
    <el-menu :router="true" @open="handleOpen" @close="handleClose">
      <el-menu-item index="/uploads">
        <i class="el-icon-upload"></i>
        <span slot="title">上传组件</span>
      </el-menu-item>
      <el-menu-item index="/table">
        <i class="el-icon-menu"></i>
        <span slot="title">表格合并</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class AsideMenu extends Vue {
  private handleOpen(key: any, keyPath: any) {
    // console.log(key, keyPath);
  }
  private handleClose(key: any, keyPath: any) {
    // console.log(key, keyPath);
  }
}
</script>
<style lang="scss">
  #aside_menu{
    float: left;
    min-height: 100vh;
    max-width: 126px;
    border-right: solid 1px #e6e6e6;
    .portrait_wrap{
      border-bottom: solid 1px #e6e6e6;
      background: #e6e6e6;
      .portrait{
        width: 64px;
        height: 56px;
        margin: 0 auto;
        overflow: hidden;
        >img{
          width: 100%;
        }
      }
    }
    .el-menu{
      border-right: 0;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 100vh;
    }
  }
  
</style>

<template>
  <div id="main_content">
    <header>{{title}}</header>
    <div class="mains">
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
@Component
export default class MainContent extends Vue {
  private title: string = '';
  @Watch('$route')
  private onroute(cur: any, old: any) {
    this.title = cur.meta.title;
  }
  private created() {
    this.title = this.$route.meta.title;
  }
}
</script>
<style lang="scss">
#main_content{
  padding-left: 126px;
  header{
    background: #e6e6e6;
    line-height: 56px;
    border-bottom: solid 1px #e6e6e6;
  }
  .mains{
    padding: 30px;
  }
}
</style>


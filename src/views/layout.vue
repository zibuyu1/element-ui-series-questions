<template>
  <div class="layout">
    <aside-menu></aside-menu>
    <main-content></main-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AsideMenu from '../components/layout/aside.vue';
import MainContent from '../components/layout/main_content.vue';
@Component({
  components: {
    AsideMenu,
    MainContent,
  },
})
export default class Layout extends Vue {}
</script>
<style>
</style>




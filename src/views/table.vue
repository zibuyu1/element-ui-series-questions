<template>
  <div id="table_component">
    <tables></tables>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tables from '../components/table/table.vue';
@Component({
  components: {
    Tables,
  },
})
export default class TableComponent extends Vue {}
</script>
<style lang="scss">
#table_component{
  width: 700px;
}
</style>


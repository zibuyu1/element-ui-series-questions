<template>
  <el-tooltip
    placement="top"
    popper-class="single-tooltip"
    :disabled="flag">
    <div class="text-wrapper" slot="content">
      {{content}}
    </div>
    <div class="wrap_one">
      <i :ref="`content${index}`">{{content}}</i>
    </div>
  </el-tooltip>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class SingleComponent extends Vue {
  private flag: boolean = false; // Tooltip 是否可用
  @Prop() private index!: any;
  @Prop() private content!: any;
  private overWidth(index: any) {
    this.$nextTick(() => {
      const contentwidth: any = this.$refs[`content${index}`] as HTMLDivElement;
      // 此处500和 max-width属性的值同步
      if (contentwidth.offsetWidth > 500) {
        this.flag = false;
      } else if (contentwidth.offsetWidth <= 500) {
        this.flag = true;
      }
    });
  }
  private created() {
    this.overWidth(this.index);
  }
}
</script>
<style lang="scss">
.wrap_one{
  display: inline-block;
  max-width: 500px; // 最大的宽度，必写属性
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 18px;
  cursor: pointer;
}
</style>

<template>
  <el-tooltip
    placement="top"
    popper-class="single-tooltip"
    :disabled="flag">
    <div class="text-wrapper" slot="content">
      {{content}}
    </div>
    <div class="multiple-wrap" :ref="`multiple-wrap${index}`">
      <div class="multiple-content" :ref="`multiple-content${index}`">
        {{content}}
      </div>
      <i class="more" v-if="!flag">...</i>
    </div>
  </el-tooltip>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class MultipleComponent extends Vue {
  private flag: boolean = false;
  @Prop() private index!: any;
  @Prop() private content!: any;
  private overHeight(index: any) {
    this.$nextTick(() => {
      const wrapheight: any = this.$refs[`multiple-wrap${index}`] as HTMLDivElement;
      const contentheight: any = this.$refs[`multiple-content${index}`] as HTMLDivElement;
      if (contentheight.offsetHeight > wrapheight.offsetHeight) {
        this.flag = false;
      } else if (contentheight.offsetHeight <= wrapheight.offsetHeight) {
        this.flag = true;
      }
    });
  }
  private created() {
    this.overHeight(this.index);
  }
}
</script>
<style lang="scss">
.multiple-wrap{
  position: relative;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px; // 行高很重要，一定要设置
  max-height: 54px; // 最大高度是行高的倍数
  overflow: hidden;
  word-break: break-all;
  i.more{
    position: absolute;
    display: inline-block;
    width: 50px;
    height: 18px; // 此处高度应和行高一致
    bottom: 0;
    right: 0;
    text-align: right;
    font-size: 18px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
  }
}
</style>

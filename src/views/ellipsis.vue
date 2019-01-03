<template>
  <div id="ellipsis">
    <div class="single-component">
      <h6>单行文本省略</h6>
      <div class="ellipsis_wrap"
        v-for="(item, index) in list" :key="index">
        <single-component
        v-if="item"
        :index="index"
        :content="item.content">
        </single-component>
      </div>
    </div>
    <div class="multiple-component">
      <h6>多行文本省略</h6>
      <div class="ellipsis_wrap"
        v-for="(item, index) in list" :key="index">
        <multiple-component
        v-if="item"
        :index="index"
        :content="item.content">
        </multiple-component>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SingleComponent from '../components/ellipsis/single.vue';
import MultipleComponent from '../components/ellipsis/multiple.vue';
@Component({
  components: {
    SingleComponent,
    MultipleComponent,
  },
})
export default class EllipsisComponent extends Vue {
  private list: any[] = [
    {
      content: `1、fdjgbfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgdgbdfbg
      fdjgbfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgdgbdfbg
      fdjgbfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgdgbdfbg
      fdjgbfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgfdjgbdgbdfbgdgbdfbg
      好的生活方式地方`,
    },
    {
      content: '2、fdsfs',
    },
    {
      content: `3、办法就是不办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过费劲儿过
      办法就是不办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过费劲儿过
      办法就是不办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过办法就是不费劲儿过费劲儿过`,
    },
  ];
}
</script>
<style lang="scss">
#ellipsis{
  h6{
    margin-bottom: 20px;
  }
  .single-component{
    margin-bottom: 30px;
  }
  .multiple-component{
    width: 500px;
  }
  .ellipsis_wrap{
    margin-bottom: 10px;
  }
}
</style>


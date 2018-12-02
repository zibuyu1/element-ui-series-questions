<template>
  <div id="upload_component">
    <upload-btns
    :uploadFileList="uploadFileList"
    @changeFileList="changeFileList">
    </upload-btns>
    <div class="demo1">
      <upload-list
      v-if="uploadFileList.length"
      :uploadFileList="uploadFileList"
      @changeFileList="changeFileList">
      </upload-list>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import UploadBtns from '../components/upload/upload_btn.vue';
import UploadList from '../components/upload/upload_list.vue';
@Component({
  components: {
    UploadBtns,
    UploadList,
  },
})
export default class UploadComponent extends Vue {
  private uploadFileList: any[] = []; // 本地维护的自定义的上传文件的列表
  @Emit()
  private changeFileList(arr: any[]) {
    this.uploadFileList = [];
    this.uploadFileList = arr;
  }
}
</script>
<style>
.demo1{
  width: 200px;
}
</style>

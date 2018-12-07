<template>
  <div id="upload_list">
    <ul class="upload_list_ul">
      <li class="upload_list_ul_li"
      v-for="(item, index) in uploadFileList" :key="index">
      <div class="content_wrap"
      @mouseover="mouseoverHandle(index)"
      @mouseout="mouseoutHandle">
        <i class="el-icon-document"></i>
        <span class="file_name" @click="download(item)">
          {{item.originalName}}
        </span>
        <i class="el-icon-circle-check" v-if="ins!==index&&item.progress===100"></i>
        <i class="el-icon-circle-close" 
        v-if="ins===index&&item.progress===100"
        @click="deleteItem(index)">
        </i>
      </div>
      <el-progress v-if="item.progress!==100" :percentage="item.progress"></el-progress>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component
export default class UploadList extends Vue {
  private ins: number = -1;
  @Prop() private uploadFileList!: any[];
  private mouseoverHandle(index: number) {
    this.ins = index;
  }
  private mouseoutHandle() {
    this.ins = -1;
  }
  private deleteItem(index: any) {
    const tempArr = this.uploadFileList;
    tempArr.splice(index, 1);
    this.$emit('changeFileList', tempArr);
  }
  private download(item: any) {
    if (item.progress === 100) {
      // 上传成功才可下载
      this.downloadFileFun(item.url);
    }
  }
  /**
   * 下载封装
   */
  private downloadFileFun(url: any) {
    const iframe: any = document.createElement('iframe') as HTMLIFrameElement;
    iframe.style.display = 'none'; // 防止影响页面
    iframe.style.height = 0; // 防止影响页面
    iframe.src = url;
    document.body.appendChild(iframe); // 这一行必须，iframe挂在到dom树上才会发请求
    // 5分钟之后删除（onload方法对于下载链接不起作用，就先抠脚一下吧）
    setTimeout(() => {
      iframe.remove();
    }, 5 * 60 * 1000);
  }
}
</script>
<style lang="scss">
#upload_list{
  >.upload_list_ul{
    >.upload_list_ul_li{
      >.content_wrap{
        font-size: 14px;
        line-height: 18px;
        padding:  0 4px;
        >i.el-icon-document,span{
          color: #333;
          vertical-align: middle;
          line-height: 18px;
        }
        >i.el-icon-circle-check{
          color: #67C23A;
          float: right;
          vertical-align: middle;
          line-height: 18px;
        }
        >i.el-icon-circle-close{
          color: #F56C6C;
          float: right;
          vertical-align: middle;
          line-height: 18px;
        }
        >span{
          cursor: pointer;
          display: inline-block;
          margin-left: 4px;
          max-width: 160px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        >.file_name:hover{
          color: #409EFF;
          text-decoration: underline;
        }
      }
      >.content_wrap:hover{
        background: rgba(0,0,0,.035);
      }
    }
  }
}
</style>


<template>
  <el-upload
    class="upload-demo"
    :limit="limit"
    :action="action"
    :accept="accept"
    :data="data"
    :multiple="multiple"
    :show-file-list="showFileList"
    :on-exceed="handleExceed"
    :with-credentials="withcredentials"
    :before-upload="handleBeforeUpload"
    :on-progress="handleProgress"
    :on-success="handleSuccess"
    :on-error="handleError">
    <el-button size="small" type="primary">上传</el-button>
  </el-upload>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component
export default class UploadBtns extends Vue {
  private limit: number = 20; // 最大允许上传个数
  private action: string = 'https://jsonplaceholder.typicode.com/posts/'; // 上传文件的地址
  private multiple: boolean = true; // 是否多选文件上传
  private data: object = {
    newName: 'newfilename',
  }; // 上传时附带的额外参数
  private showFileList: boolean = false; // 是否显示文件上传列表
  private withcredentials: boolean = true; // 支持发送 cookie 凭证信息
  private accept: string = '.jpg, .png, .txt'; // 接受上传的文件类型
  private tempArr: any[] = [];
  @Prop() private uploadFileList!: any[];
  /**
   * 文件超出个数限制时的钩子
   */
  private handleExceed(files: any, fileList: any) {
    if (fileList.length > 20) {
      this.$message.error('最多允许上传20个文件');
      return false;
    }
  }
  /**
   * 文件上传前的钩子，可以做一些拦截
   * return false,则停止上传
   */
  private handleBeforeUpload(file: any) {
    // 文件大小限制
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      this.$message.error('不得超过5M');
      return isLt5M;
    }
    // 文件类型限制
    const name = file.name ? file.name : '';
    const ext = name
      ? name.substr(name.lastIndexOf('.') + 1, name.length)
      : true;
    const isExt = this.accept.indexOf(ext) < 0;
    if (isExt) {
      this.$message.error('请上传正确的格式类型');
      return !isExt;
    }
    // 大小和类型验证都通过后，给自定义的列表中添加需要的数据
    this.objAddItem(this.tempArr, file);
  }
  /**
   * 文件上传时的钩子
   */
  private handleProgress(event: any, file: any, fileList: any) {
    this.tempArr.forEach((element: any, index: number) => {
      if (element.uid === file.uid) {
        // 更新这个uid下的进度
        const progress = Math.floor(event.percent);
        // 防止上传完接口还没有返回成功值，所以此处给定progress的最大值为99，成功的钩子中再置为100
        element.progress = progress === 100 ? 99 : progress;
        this.$set(this.tempArr, index, element);
        this.$emit('changeFileList', this.tempArr);
      }
    });
  }
  /***
   * 文件上传成功时
   */
  private handleSuccess(response: any, file: any, fileList: any) {
    this.tempArr.forEach((element: any, index: number) => {
      if (element.uid === file.uid) {
        element.progress = 100;
        // element.url为下载地址，一般后端人员会给你返回
        // 我这边为了做后面的下载，先写死链接供测试
        element.url = 'http://originoo-1.b0.upaiyun.com/freepic/3226433.jpg!freethumb';
        this.$message.success('文件上传成功');
        this.$set(this.tempArr, index, element);
        this.$emit('changeFileList', this.tempArr);
      }
    });
    // response是后端接口返回的数据，可以根据接口返回的数据做一些操作
    // 示例
    // const bizCode = response.rspResult.bizCode;
    // switch (bizCode) {
    //   case 200:
    //     this.tempArr.forEach((element: any, index: number) => {
    //       if (element.uid === file.uid) {
    //         element.progress = 100;
    //         element.url = response.data.url; // 这是后端人员给我返回的下载地址
    //         this.$message.success('文件上传成功');
    //         this.$set(this.tempArr, index, element);
    //         this.$emit('changeFileList', this.tempArr);
    //       }
    //     });
    //     break;
    //   default:
    //     this.tempArr.forEach((element: any, index: number) => {
    //       if (element.uid === file.uid) {
    //         this.tempArr.splice(index, 1); // 上传失败删除该记录
    //         this.$message.error('文件上传失败');
    //         this.$emit('changeFileList', this.tempArr);
    //       }
    //     });
    //     break;
    // }
  }
  /***
   * 文件上传失败删除该项
   */
  private handleError(err: any, file: any, fileList: any) {
    this.tempArr.forEach((element: any, index: number) => {
      if (element.uid === file.uid) {
        this.tempArr.splice(index, 1); // 上传失败删除该记录
        this.$message.error('文件上传失败');
        this.$emit('changeFileList', this.tempArr);
      }
    });
  }
  /***
   * 添加数据
   */
  private objAddItem(tempArr: any[], file: any) {
    const tempObj = {
      uid: file.uid, // uid用于辨别文件
      originalName: file.name, // 列表显示的文件名
      progress: 0, // 进度条
      code: 200, // 上传状态
    };
    tempArr.push(tempObj);
    this.$emit('changeFileList', tempArr);
  }
  private created() {
    this.tempArr = this.uploadFileList;
  }
}
</script>

import { Vue, Component, Prop } from 'vue-property-decorator';
import axios from 'axios';
import urls from '../assets/js/baseUrl';

@Component
export default class UploadMethods extends Vue {
  private fileList: object = [];
  private complete: number = 0;
  private complete1: number = 0;
  private complete2: number = 0;
  private headers: object = {
    'Content-Type': 'multipart/form-data',
  };
  @Prop() private uploadType!: string;
  private httpRequest(item: any) {
    this.complete = 0;
    const file = item.file;
    const param: any = new FormData();
    param.append('file', file);
    const config = {
      onUploadProgress: (progressEvent: any) => {
        this.complete = (progressEvent.loaded / progressEvent.total * 100 || 0);
      },
    };
    axios.post(`${urls.baseUrl}/cost/upload-2d/11392`, param, config);
  }
  private handleFileSize(size: any) {
    const isSize = size / 1024 / 1024 < 1;
  }
}


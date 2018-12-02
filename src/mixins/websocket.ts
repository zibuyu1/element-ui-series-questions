import { Vue, Component } from 'vue-property-decorator';
declare module 'vue/types/vue' {
  interface Vue {
    form: object;
    handleSubmit(name: any): Promise<any>;
    handleReset(name: any): void;
  }
}

/**
 * mixins
 */
@Component
export default class Websock extends Vue {
  public form: object = {};
  public i: number = 0;
  public handleSubmit(name: any): Promise<any> {
    return new Promise((resolve) => {
      resolve();
    });
  }
  public handleReset(name: any): void {
    setInterval(() => {
      this.i++;
    }, 1000);
  }
}

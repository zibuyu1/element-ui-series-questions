import Encryption from './encryption';
const encryption = new Encryption();
class Local {
  public setItem(key: string, value: any) {
    const message = encryption.encryptByDES(JSON.stringify(value));
    sessionStorage.setItem(key, message);
  }
  public getItem(key: string) {
    const str = sessionStorage.getItem(key);
    let message = null;
    if (str) {
      message = encryption.decryptByDES(str);
      try {
        return JSON.parse(message);
      } catch (e) {
        return str;
      }
    }
    return null;
  }
  public removeItem(key: string) {
    sessionStorage.removeItem(key);
  }
  public removeAll() {
    sessionStorage.clear();
  }
  public queryOfkey(key: string, name: any) {
    const obj = sessionStorage.getItem(key);
    if (obj) {
      return obj[name];
    }
    return null;
  }
}

export default  Local;

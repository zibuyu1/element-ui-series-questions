import CryptoJS from 'crypto-js';

const key = 'JRJR2017RongXun0'; // 加密秘钥
const iv = 'CB3EC842D7C69578'; //  矢量

class Encryption {
  // 加密
  public encryptByDES(str: string): string {
    const KeyHex = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.TripleDES.encrypt(str,
      KeyHex, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse(iv),
      });
    const hexstr = encrypted.ciphertext.toString().toUpperCase();
    return hexstr;
  }
  // 解密
  public decryptByDES(str: string): string {
    const KeyHex = CryptoJS.enc.Utf8.parse(key);
    // 因为我们加密的时候用到的16进制字符串，需要进行转换
    // 第一步把16进制字符串转为WordArray格式
    const WordArray = CryptoJS.enc.Hex.parse(str);
    // 第二步把WordArray再转为base64的字符串
    const base64str = CryptoJS.enc.Base64.stringify(WordArray);
    // 第三步再进行解密
    const decrypted = CryptoJS.TripleDES.decrypt(base64str,
      KeyHex, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse(iv),
      });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
export default Encryption;

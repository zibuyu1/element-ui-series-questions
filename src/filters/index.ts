import moment from 'moment';
/**
 * fmoney: 保留小数位数
 * s: 原始值
 * n: 保留的位数
 */
function fmoney(s: any, n: any) {
  n = n > 0 && n <= 20 ? n : 2;
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
  const l = s.split('.')[0].split('').reverse();
  const r = s.split('.')[1];
  let t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '');
  }
  return t.split('').reverse().join('') + '.' + r;
}

/**
 * allAccount: 汇率 * 总金额
 * arg1: 总金额
 * arg2: 汇率
 */
export function allAccount(arg1: number, arg2: number) {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
  m += s1.split('.')[1].length;
  m += s2.split('.')[1].length;
  const value = Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
  return fmoney(value, 2);
}

/**
 * volumeValue: 体积单位换算
 * value: 原始值（单位：mm³）
 */
export function volumeValue(value: number) {
  let newValue: string = '';
  if (value < 1000) {
    newValue = value.toFixed(2) + 'mm³';
  } else if (value > 1000 && value < 1000000) {
    newValue = (value / 1000).toFixed(2) + 'cm³';
  } else if (value > 1000000 && value < 1000000000) {
    newValue = (value / 1000000).toFixed(2) + 'dm³';
  } else if (value > 1000000000 && value < 1000000000000) {
    newValue = (value / 1000000000).toFixed(2) + 'm³';
  }
  return newValue;
}

/**
 * weightValue: 重量单位换算
 * val: 原始值（单位：kg）
 */
export function weightValue(val: number) {
  const value = val * 1000;
  let newValue: string = '';
  if (value < 1000) {
    newValue = value.toFixed(2) + 'g';
  } else if (value > 1000 && value < 1000000) {
    newValue = (value / 1000).toFixed(2) + 'kg';
  } else if (value > 1000000 && value < 1000000000) {
    newValue = (value / 1000000000).toFixed(2) + 't';
  }
  return newValue;
}

/**
 * filterData: 过滤时间
 * val: 原始值（时间戳）
 */
export function filterData(value: number) {
  return moment(value).format('YYYY-MM-DD');
}

type ValidExecObject = number | string

/**
 * 精确计算
 * @class
 */
export class ExactCalc {

  constructor() {
    throw TypeError('ExactCalc is not a constructor')
  }

  /** 加法 */
  static add(...list: ValidExecObject[]) {
    return list.reduce(ExactCalc._add)
  }

  /** 减法 */
  static subtract(...list: ValidExecObject[]) {
    return list.reduce(ExactCalc._subtract)
  }

  /** 乘法 */
  static multiply(...list: ValidExecObject[]) {
    return list.reduce(ExactCalc._multiply)
  }

  /** 除法 */
  static divide(...list: ValidExecObject[]) {
    return list.reduce(ExactCalc._divide)
  }

  /**
   *@private
   */
  static _add(n: ValidExecObject, m: ValidExecObject) {
    const { F, S, T, l1, l2 } = ExactCalc.getInteger(n, m);
    return (F[0] * T + F[1] * T / Math.pow(10, l1) + S[0] * T + S[1] * T / Math.pow(10, l2)) / T
  }

  /**
   *@private
   */
  static _subtract(n: ValidExecObject, m: ValidExecObject) {
    const { F, S, T, l1, l2 } = ExactCalc.getInteger(n, m);
    return (F[0] * T + F[1] * T / Math.pow(10, l1) - S[0] * T - S[1] * T / Math.pow(10, l2)) / T
  }

  /**
   *@private
   */
  static _multiply(n: ValidExecObject, m: ValidExecObject) {
    const { F, S, T, l1, l2 } = ExactCalc.getInteger(n, m);
    return ((F[0] * T + F[1] * T / Math.pow(10, l1)) * (S[0] * T + S[1] * T / Math.pow(10, l2))) / T / T
  }

  /**
   *@private
   */
  static _divide(n: ValidExecObject, m: ValidExecObject) {
    const { F, S, T, l1, l2 } = ExactCalc.getInteger(n, m);
    return ((F[0] * T + F[1] * T / Math.pow(10, l1)) / (S[0] * T + S[1] * T / Math.pow(10, l2)))
  }

  /**
   *@private
   */
  static numToString(tempArray: any) {
    if (typeof tempArray === 'number') {
      return tempArray.toString()
    }
    return '0'
  }

  /**
   *@private
   */
  static handleNum(n: any) {
    n = n.toString();
    let temp = n.split('.');
    const lens = temp[1].length
    if (n.substring(0, 1) === '-') {
      temp[1] = `-${temp[1]}`
    }
    temp.push(lens);
    return temp
  }

  /**
   *@private
   */
  static getInteger(n: any, m: any) {
    n = typeof n === 'string' ? n : ExactCalc.numToString(n);
    m = typeof m === 'string' ? m : ExactCalc.numToString(m);
    let F = n.indexOf('.') !== -1 ? ExactCalc.handleNum(n) : [n, 0, 0],
      S = m.indexOf('.') !== -1 ? ExactCalc.handleNum(m) : [m, 0, 0],
      l1 = F[2], l2 = S[2],
      L = Math.max(l1, l2),
      T = Math.pow(10, L);
    return {
      F,
      S,
      T,
      l1,
      l2
    }
  }
}

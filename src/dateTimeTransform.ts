import moment, { Moment } from 'moment'
import { isNone } from './base'
/**
 * 日期时间转化工具
 */
export default class DateTimeTransform {
  /**
   * 将 Moment 类型的时间转化为 unix 时间戳（10位）
   */
  static momentToUnix(m: Moment) {
    if (isNone(m)) return m
    return m.unix()
  }
  /**
   * 将 unix 时间戳（10位）转化为 Moment 类型的时间
   */
  static unixToMoment(t: string | number) {
    if (isNone(t)) return t
    t = t as number
    return moment.unix(t)
  }
  /**
   * 将 Moment 类型的时间转化为 毫秒时间戳（13位）
   */
  static momentToMs(m: Moment) {
    if (isNone(m)) return m
    return m.valueOf()
  }
  /**
   * 将毫秒时间戳（13位）转化为 Moment 类型的时间
   */
  static msToMoment(t: string | number) {
    if (isNone(t)) return t
    return moment(t)
  }
}
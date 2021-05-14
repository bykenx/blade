/**
 * @class DateFormat
 * 日期、时间格式化
 */
export default class DateFormat {
  /**
   * 按 `1972-01-01` 格式化日期
   * @param date 
   * @param padZero
   * @param separator 
   */
  static formatDate(date: string | number | Date, padZero: boolean = false, separator: string = '/') {
    date = date instanceof Date ? date : new Date(date)
    const y = date.getFullYear()
    const m = date.getMonth() + 1
    const d = date.getDate()
    return [
      padZero ? `${y}`.padStart(4, '0') : y,
      padZero ? `${m}`.padStart(2, '0') : m,
      padZero ? `${d}`.padStart(2, '0') : d
    ].join(separator)
  }

  /**
   * 按 `10:00:00` 格式化时间
   * @param date 
   * @param padZero 
   * @param separator 
   */
  static formatTime(date: string | number | Date, padZero: boolean = true, separator: string = ':') {
    date = date instanceof Date ? date : new Date(date)
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    return [
      padZero ? `${h}`.padStart(2, '0') : h,
      padZero ? `${m}`.padStart(2, '0') : m,
      padZero ? `${s}`.padStart(2, '0') : s,
    ].join(separator)
  }

  /**
   * 按 `1972-01-01 10:00:00` 格式化日期
   * @param date 
   * @param padZeros 
   * @param separators 
   */
  static formatDateTime(date: string | number | Date, padZeros?: Array<boolean>, separators?: Array<string>) {
    const [datePadZero, timePadZero] = padZeros || []
    const [dateSeparator, timeSeparator] = separators || []
    return `${this.formatDate(date, datePadZero, dateSeparator)} ${this.formatTime(date, timePadZero, timeSeparator)}`
  }
}
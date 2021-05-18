/**
 * 节流方法
 * 
 * @param func 回调方法
 * @param delay 延时（ms）
 */
export function throttle(func: Function, delay: number) {
  let wait = false
  return (...args: any[]) => {
    if (!wait) {
      wait = true
      func.call(null, ...args)
      setTimeout(() => {
        wait = false
      }, delay)
    }
  }
}
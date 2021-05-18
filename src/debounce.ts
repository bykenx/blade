
/**
 * 防抖方法
 * 
 * @param func 回调方法
 * @param delay 延时（ms）
 * @returns 
 */
export function debounce(func: Function, delay: number) {
  let timer: NodeJS.Timeout
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.call(null, ...args)
    }, delay)
  }
}
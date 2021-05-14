export default function throttle(func: Function, delay: number) {
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
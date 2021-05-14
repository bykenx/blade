
export default function debounce(func: Function, delay: number) {
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
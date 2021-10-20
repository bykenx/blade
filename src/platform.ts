/** 判断是否在浏览器中 */
export function isBrowser() {
  return this.window !== undefined
}
export function toLower(obj: any) {
  return String.prototype.toLowerCase.call(obj)
}

export function toUpper(obj: any) {
  return String.prototype.toUpperCase.call(obj)
}

export function typeOf(obj: any) {
  return toLower(Object.prototype.toString.call(obj).slice(8, -1))
}

export function hasOwn(obj: any, key: string) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * 判断 obj 是 undefined 或 null
 * @param obj 
 */
export function isNone(obj: any) {
  return obj === undefined || obj === null
}

/**
 * 判断对象为空
 * @param obj 
 */
export function isEmpty(obj: any) {
  for (let key in obj) {
    if (hasOwn(obj, key)) return false
  }
  return true
}
/**
 * 字符串小写转化
 * @param obj 
 */
export function toLower(obj: string) {
  return String.prototype.toLowerCase.call(obj)
}

/**
 * 字符串大写转化
 * @param obj 
 */
export function toUpper(obj: string) {
  return String.prototype.toUpperCase.call(obj)
}

/**
 * 首字母大写转化
 * @param obj
 */
export function toCapitalize(obj: string) {
  return obj.replace(/./, toUpper)
}

/**
 * 获取对象类型（小写字符串）
 * @param obj 
 */
export function typeOf(obj: any) {
  return toLower(Object.prototype.toString.call(obj).slice(8, -1))
}

/**
 * 判断对象是否有某一属性
 * @param obj 
 */
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
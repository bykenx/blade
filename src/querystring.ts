import qs from 'qs'

const parseOptions: qs.IParseOptions = {
  charset: 'iso-8859-1', // a=%E6
  delimiter: '&', // a=1&b=2
  plainObjects: true, // Object.create(null)
  ignoreQueryPrefix: true, // ?a=1&b=2
  strictNullHandling: true, // 'a&b=' => { a: null, b: '' }
}

const stringifyOptions2: qs.IStringifyOptions = {
  charset: 'iso-8859-1', // a=%E6
  delimiter: '&', // a=1&b=2
  strictNullHandling: true, // 'a&b=' => { a: null, b: '' }
  arrayFormat: 'repeat', // { a: ['b', 'c'] } => 'a=b&a=c'
}

/**
 * 查询参数解析
 * @description
 * 解析将按照
 *  1. 按照 `iso-8859-1` 解析代理字符；
 *  2. 认为 `&` 为连接字符串；
 *  3. 使用 `Object.create(null)` 创建的普通对象存放结果（字符串中允许存在 `hasOwnProperty=12`）；
 *  4. 忽略查询前缀 `?`；
 *  5. 严格区分 `null`。
 * @param obj 
 * @returns 
 */
export function qsParse(obj: any) {
  return qs.parse(obj, parseOptions)
}

/**
 * 查询参数构造
 * @description
 * 解析将按照
 *  1. 按照 `iso-8859-1` 解析代理字符；
 *  2. 将 `&` 为连接字符串；
 *  3. 严格区分 `null`；
 *  4. 使用 重复 key 的方式表示数组。
 * @param obj
 * @param addQueryPrefix 是否添加查询前缀（?）
 * @returns 
 */
export function qsStringify(obj: any, addQueryPrefix = false) {
  const options = {
    ...stringifyOptions2,
    addQueryPrefix,
  }
  return qs.stringify(obj, options)
}
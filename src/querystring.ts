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

export function qsParse(obj: any) {
  return qs.parse(obj, parseOptions)
}

export function qsStringify(obj: any, addQueryPrefix = false) {
  const options = {
    ...stringifyOptions2,
    addQueryPrefix,
  }
  return qs.stringify(obj, options)
}
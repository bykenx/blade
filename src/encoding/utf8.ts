
export function encode(s: string): string {
  s = encodeURI(s)
  return s.replace(/%([a-f0-9]{2})/gi, (substring, matched) => String.fromCharCode(~~`0x${matched}`))
}

export function decode(s: string): string {
  s = s.split('').map(item => item.charCodeAt(0)).reduce((str, item) => str + `%${item.toString(16)}`, '')
  return decodeURI(s)
}
import { isBrowser } from "../platform"

/**
 * 将 `utf-16` 字符串转化为 `base64` 字符串
 */
export function encodeUTF16(s: string): string {
  if (!isBrowser()) {
    return Buffer.from(s).toString('base64')
  }
  const uint16Array = new Uint16Array(s.length)
  uint16Array.forEach((item, index, arr) => {
    arr[index] = s.charCodeAt(index)
  })
  return btoa(String.fromCharCode(...new Uint8Array(uint16Array.buffer)))
}

/**
 * 将 `base64` 字符串转化为 `utf-16` 字符串
 */
export function decodeUTF16(s: string): string {
  if (!isBrowser()) {
    return Buffer.from(s, 'base64').toString()
  }
  s = atob(s)
  const uint8Array = new Uint8Array(s.length)
  uint8Array.forEach((item, index, arr) => {
    arr[index] = s.charCodeAt(index)
  })
  return String.fromCharCode(...new Uint16Array(uint8Array.buffer))
}

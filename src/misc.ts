/**
 * 保存数据
 */
export function saveDataAs(data: BlobPart, filename: string, options?: BlobPropertyBag) {
  const urlObj = window.URL || window.webkitURL
  const blob = new Blob([data], options)
  const link = document.createElementNS("http://www.w3.org/1999/xhtml", "a") as HTMLAnchorElement
  link.href = urlObj.createObjectURL(blob)
  link.download = filename

  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: false,
    view: window,
    detail: 0,
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    button: 0,
    relatedTarget: null,
  })
  link.dispatchEvent(event)
}

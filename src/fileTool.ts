import Completer from "./completer"
import { fromBuffer as fileTypeFromBuffer } from "file-type"

export class FileTool {
  /** `File` 转 `DataURL` */
  static convertToDataUrl(file: File) {
    const reader = new FileReader()
    const completer = new Completer<string>()
    reader.addEventListener('load', (event) => {
      completer.complete(event.target?.result)
    })
    reader.readAsDataURL(file)
    return completer.future
  }

  /** `Buffer` 或 `ArrayBufferLike` 转 `File` */
  static async fromBuffer(buffer: Buffer | ArrayBufferLike, fileName: string) {
    const result = await fileTypeFromBuffer(buffer)
    const type = result?.mime || undefined
    return new File([new Uint8Array(buffer)], fileName, { type })
  }

  /** `File` 转 `FormData` */
  static async toFormData(file: File | File[], fieldName: string | undefined) {
    fieldName = fieldName || 'file'
    const formData = new FormData()
    const files = (file as any).length > 0 ? file as File[] : [file as File]
    for (let file of files) {
      formData.append(fieldName, file, file.name)
    }
    return formData
  }
}
import { FileTool } from "../src/fileTool"

const { readFileSync } = require('fs')
const { join } = require('path')

describe('test file tool', () => {
  test('test file convert to data url', async () => {
    const buffer = readFileSync(join(__dirname, 'fixtures/test.jpg'))
    const file = new File([new Uint8Array(buffer)], 'test.jpg', { type: 'image/jpeg' })
    await expect(FileTool.toDataUrl(file)).resolves.toEqual(`data:image/jpeg;base64,${buffer.toString('base64')}`)
  })

  // TODO: to test fromBuffer
})
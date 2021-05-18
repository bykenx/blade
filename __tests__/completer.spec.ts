import { Completer } from "../src/completer"

describe('completer complete', () => {
  test('completer resolve', async () => {
    const completer = new Completer<string>()
    setTimeout(() => {
      completer.complete('Ok')
    })
    await expect(completer.future).resolves.toEqual('Ok')
  })

  test('completer completeError', async () => {
    const completer = new Completer<string>()
    setTimeout(() => {
      completer.completeError('Error')
    })
    await expect(completer.future).rejects.toEqual('Error')
  })

  test('completer complete but return reject', async () => {
    const completer = new Completer<string>()
    setTimeout(() => {
      completer.complete(Promise.reject('Error'))
    })
    await expect(completer.future).rejects.toEqual('Error')
  })

  test('completer completeError but return resolve', async () => {
    const expectResult = Promise.resolve('Ok')
    const completer = new Completer<string>()
    setTimeout(() => {
      completer.completeError(expectResult)
    })
    await expect(completer.future).rejects.toEqual(expectResult)
  })
})
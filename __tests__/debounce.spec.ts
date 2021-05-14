import Completer from "../src/completer"
import debounce from "../src/debounce"

describe('Debounce Test', () => {
  test('debounce', () => {
    const l = []
    const completer = new Completer<null>()

    const func = debounce(() => {
      l.push('Test')
    }, 2e2)

    func()
    setTimeout(() => {
      func()
    }, 3e2)
    setTimeout(() => {
      func()
    }, 4e2)

    setTimeout(() => {
      completer.complete(null)
    }, 7e2)
    return completer
      .future
      .then(() => {
        expect(l.length).toEqual(2)
      })
  })
})
import throttle from "../src/throttle"

describe('Throttle Test', () => {
  test('throttle', () => {
    const l = []
    const func = throttle(() => {
      l.push('Test')
    }, 5e2)
    func()
    func()
    expect(l.length).toEqual(1)
  })
})
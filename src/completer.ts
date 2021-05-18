/**
 * Completer
 * 
 * @description
 * 一种处理异步操作的方法，
 * 灵感来自 dart 的 [Completer](https://api.flutter.dev/flutter/dart-async/Completer-class.html)
 * 
 * @example
 * ```js
 * function funcB(completer) {
 *     // 异步处理
 *     const result = 'result'
 *     completer.complete(result)
 * }
 * async function funcA () {
 *     const completer = new Completer()
 *     funcB(completer)
 *     const result = await c.future
 *     console.log(result) // Out: "result"
 * }
 * ```
 */
export class Completer<T> {

  private _finished: boolean
  private _resolve: Function
  private _reject: Function
  private _a: Promise<T>

  constructor() {
    this._finished = false
    this._resolve = () => { }
    this._reject = () => { }
    this._a = new Promise((resolve, reject) => {
      this._resolve = resolve
      this._reject = reject
    })
  }

  complete(value: any) {
    this._finished = true
    this._resolve(value)
  }

  completeError(error: any) {
    this._finished = true
    this._reject(error)
  }

  get isCompleted() {
    return this._finished
  }

  get future() {
    return this._a
  }

}

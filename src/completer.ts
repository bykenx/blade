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

import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react'

export default function useResetState<T>(defaultValueOrFunc: T | (() => T)): [T, Dispatch<SetStateAction<T>>, () => void] {
  const initializedRef = useRef(false)
  const defaultValueRef = useRef<T>()
  if (!initializedRef.current) {
    initializedRef.current = true
    const defaultValue = typeof defaultValueOrFunc === 'function' ? (defaultValueOrFunc as Function)() : defaultValueOrFunc
    defaultValueRef.current = defaultValue
  }
  const [value, setValue] = useState(defaultValueRef.current)
  const resetValue = useCallback(() => setValue(defaultValueRef.current), [value])
  return [
    value,
    setValue,
    resetValue,
  ]
}
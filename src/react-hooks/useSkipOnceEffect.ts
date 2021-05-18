import React, { EffectCallback } from 'react'

export function useSkipOnceEffect(effect: EffectCallback, deps?: React.DependencyList) {
  const initializedRef = React.useRef(false)
  const wrappedEffect = () => {
    if (!initializedRef.current) {
      initializedRef.current = true
      return
    }
    return effect()
  }
  return React.useEffect(wrappedEffect, deps)
}
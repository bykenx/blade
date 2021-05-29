import { EffectCallback, useEffect } from "react"

export default function useMounted(effect: EffectCallback) {
    return useEffect(effect, [])
}
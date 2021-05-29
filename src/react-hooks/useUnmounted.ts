import { useEffect } from "react"

export default function useMounted(callback: () => void) {
    return useEffect(() => callback, [])
}
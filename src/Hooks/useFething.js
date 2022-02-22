import { useState } from "react"

export const useFething = (callback) => {
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState('')

  const featching = async (...args) => {
    try {
      setisLoading(true)
      await callback(...args)
    } catch (e) {
      setError(e.message)
    } finally {
      setisLoading(false)
    }
  }
  return [featching, isLoading, error]
}

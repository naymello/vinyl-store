import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequest = <T = unknown>(url: string) => {
  const [response, setResponse] = useState<T | null>(null)

  useEffect(() => {
    axios.get(url).then((response) => setResponse(response.data))
  }, [])

  return { response }
}

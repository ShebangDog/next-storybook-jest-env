import { useState } from "react"

type UseCount = (initialValue: number) => { count: number, countUp: () => void }
export const useCount: UseCount = (initialValue) => {
  const [count, setCount] = useState(initialValue)

  const countUp: ReturnType<UseCount>["countUp"] = () => setCount(prevState => prevState + 1)

  return ({
    count,
    countUp,
  })
}
import { Button } from "../Button"
import { useCount } from "../../../hooks/useCount"

// export type CounterProps = { value: number, onClick: () => void }
export const Counter = () => {
  const {count, countUp} = useCount(0)

  return <Button text={`${count}`} onClick={countUp}/>
}

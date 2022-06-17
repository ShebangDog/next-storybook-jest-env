import { Button } from "../Button"

export type CounterProps = { value: number, onClick: () => void }
export const Counter = (props: CounterProps) => {
  const { value, onClick } = props

  return <Button text={value.toString()} onClick={onClick}/>
}

export type ButtonProps = {
  text: string
  onClick: () => void
}
export const Button = (props: ButtonProps) => {
  const {onClick, text} = props

  return (
    <button onClick={onClick}>{text}</button>
  )
}

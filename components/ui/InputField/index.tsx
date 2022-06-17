import { ChangeEventHandler } from "react"

export type InputFieldProps = { value: string, onChange: (value: string) => void }
export const InputField = (props: InputFieldProps) => {
  const { value, onChange } = props

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value)
  }

  return <input type="text" value={value} onChange={handleChange} />
}

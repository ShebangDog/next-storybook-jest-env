import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { InputField } from "./index"
import { userEvent } from "@storybook/testing-library"
import { within } from "@testing-library/dom"
import { useState } from "react"

type ComponentType = typeof InputField
type InputFieldStoryObject = ComponentStoryObj<ComponentType>
const componentMeta: ComponentMeta<ComponentType> = {
  component: InputField,
  args: {
    value: "",
  }
}

export const Primary: InputFieldStoryObject = {
  render: () => {
    const a = ""

    a
    const [value, setValue] = useState("")
    const handleChange = (string: string) => setValue(string)

    return <InputField value={value} onChange={handleChange}/>
  }
}

export const TypeInput: InputFieldStoryObject = {
  ...Primary,
  args: {
    value: "inputField"
  },
  play: async (context) => {
    const { canvasElement } = context

    const canvas = within(canvasElement)
    const input = canvas.getByRole("textbox")

    await userEvent.type(input, "ShebangDog")
  }
}
export default componentMeta

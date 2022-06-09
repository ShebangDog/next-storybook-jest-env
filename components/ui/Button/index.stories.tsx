import { Button } from "./index"
import { ComponentMeta, ComponentStoryObj } from "@storybook/react"

export default {
  component: Button
} as ComponentMeta<typeof Button>

type ButtonStoryObject = ComponentStoryObj<typeof Button>

export const Primary: ButtonStoryObject = {
  args: {
    text: "Primary",
    onClick: () => console.log("Primary")
  }
}


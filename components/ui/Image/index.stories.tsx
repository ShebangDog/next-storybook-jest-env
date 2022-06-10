import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { Image } from "./index"

export default {
  component: Image
} as ComponentMeta<typeof Image>

type ImageStoryObject = ComponentStoryObj<typeof Image>

export const Primary: ImageStoryObject = {
  args: {
    src: "https://picsum.photos/200/300"
  }
}

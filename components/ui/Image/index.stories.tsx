import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { Image } from "./index"

export default {
  component: Image,
  args: {
    width: "200px",
    height: "400px",
    size: "300px",
    borderRadius: "36px"
  },
} as ComponentMeta<typeof Image>

type ImageStoryObject = ComponentStoryObj<typeof Image>

export const Primary: ImageStoryObject = {
  args: {
    src: "https://picsum.photos/600/600",
    alt: "random-image",
    kind: "Square",
    size: "200px"
  }
}

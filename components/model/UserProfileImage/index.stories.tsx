import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { UserProfileImage } from "./index"

export default {
  component: UserProfileImage
} as ComponentMeta<typeof UserProfileImage>

type UserProfileImageStoryObject = ComponentStoryObj<typeof UserProfileImage>

export const Primary: UserProfileImageStoryObject = {
  args: {
    profile: "https://picsum.photos/400/400",
    alt: "generated",
    size: "400px",
  }
}

export const Secondary: UserProfileImageStoryObject = {
  args: {
    profile: "https://picsum.photos/100/100",
    alt: "generated",
    size: "100px",
  }
}

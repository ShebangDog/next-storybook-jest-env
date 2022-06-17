import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { UserProfileCard } from "./index"
import { screen, userEvent } from "@storybook/testing-library"

type ComponentType = typeof UserProfileCard
type UserProfileCardStoryObject = ComponentStoryObj<ComponentType>
const componentMeta: ComponentMeta<ComponentType> = {
  component: UserProfileCard,
  args: {
    profile: "https://picsum.photos/200/200",
    alt: "gen",
    age: 12,
    name: "shebang",
    size: "200px",
    id: "shebang-id",
    onClick: name => console.log(`onClick: ${name}`)
  }
}

export const Primary: UserProfileCardStoryObject = {
}

export const ClickOnce: UserProfileCardStoryObject = {
  ...Primary,
  play: () => {
    userEvent.click(screen.getByText("shebang"))
  }
}

export default componentMeta

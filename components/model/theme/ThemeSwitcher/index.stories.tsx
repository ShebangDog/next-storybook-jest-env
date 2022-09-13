import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { ThemeTuple } from "../../../../models/theme"
import { StatelessThemeSwitcher } from "./index.stateless"

type ComponentType = typeof StatelessThemeSwitcher
type ThemeSwitcherStoryObject = ComponentStoryObj<ComponentType>
const componentMeta: ComponentMeta<ComponentType> = {
  component: StatelessThemeSwitcher,
  args: {
    appTheme: "System",
    themes: ThemeTuple,
    onSwitch: console.log
  }
}

export const Primary: ThemeSwitcherStoryObject = {
}

export default componentMeta

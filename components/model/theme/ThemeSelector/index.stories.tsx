import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { StatelessThemeSelector } from "./index.stateless"
import { ThemeTuple } from "../../../../models/theme"

type ComponentType = typeof StatelessThemeSelector
type ThemeSelectorStoryObject = ComponentStoryObj<ComponentType>
const componentMeta: ComponentMeta<ComponentType> = {
  component: StatelessThemeSelector,
  args: {
    themes: ThemeTuple,
    selectedTheme: "Dark",
    onSelectTheme: (theme) => () => console.log(theme)
    // default arguments
  }
}

export const Primary: ThemeSelectorStoryObject = {
}

export default componentMeta

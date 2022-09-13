import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { StatelessThemeIcon } from "./index.stateless"

type ComponentType = typeof StatelessThemeIcon
type ThemeIconStoryObject = ComponentStoryObj<ComponentType>
const componentMeta: ComponentMeta<ComponentType> = {
  component: StatelessThemeIcon,
  args: {
    appTheme: "Dark"
    // default arguments
  }
}

export const Primary: ThemeIconStoryObject = {

}

export default componentMeta

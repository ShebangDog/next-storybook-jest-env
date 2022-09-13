import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { StatelessExpandableThemeSelector } from "./index.stateless"
import { RecoilRoot } from "recoil"
import { ThemeTuple } from "../../../../models/theme"

type ComponentType = typeof StatelessExpandableThemeSelector
type ExpandableThemeSelectorStoryObject = ComponentStoryObj<ComponentType>
const componentMeta: ComponentMeta<ComponentType> = {
  component: StatelessExpandableThemeSelector,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story/>
      </RecoilRoot>
    )
  ],
  args: {
    // default arguments
    isExpand: true,
    switchExpand: () => console.log(true),
    themes: ThemeTuple
  }
}

export const Primary: ExpandableThemeSelectorStoryObject = {}

export default componentMeta

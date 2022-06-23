---
to: './components/model/<%= componentName %>/index.stories.tsx'
---

import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { <%= componentName %> } from "./index"

type ComponentType = typeof <%= componentName %>
type <%= componentName %>StoryObject = ComponentStoryObj<ComponentType>
const componentMeta: ComponentMeta<ComponentType> = {
  component: <%= componentName %>,
  args: {
    // default arguments
  }
}

export const Primary: <%= componentName %>StoryObject = {
}

export default componentMeta

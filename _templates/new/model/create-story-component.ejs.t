---
to: './components/model/<%= modelName %>/<%= componentName %>/index.stories.tsx'
---

import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { Stateless<%= componentName %> } from "./index.stateless"

type ComponentType = typeof Stateless<%= componentName %>
type <%= componentName %>StoryObject = ComponentStoryObj<ComponentType>
const componentMeta: ComponentMeta<ComponentType> = {
  component: Stateless<%= componentName %>,
  args: {
    // default arguments
  }
}

export const Primary: <%= componentName %>StoryObject = {
}

export default componentMeta

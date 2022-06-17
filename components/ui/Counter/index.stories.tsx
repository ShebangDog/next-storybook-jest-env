import { ComponentMeta, ComponentStoryObj } from "@storybook/react"
import { Counter } from "./index"
import { useCount } from "../../../hooks/useCount"
import { within } from "@testing-library/dom"
import { userEvent } from "@storybook/testing-library"

type ComponentType = typeof Counter
type CounterStoryObject = ComponentStoryObj<ComponentType>
const componentMeta: ComponentMeta<ComponentType> = {
  component: Counter,
  args: {
    value: 0,
  }
}

export const Primary: CounterStoryObject = {
  render: (args) => {
    const {count, countUp} = useCount(args.value)

    return (<Counter value={count} onClick={countUp}/>)
  }
}

export const CountUpTwice: CounterStoryObject = {
  ...Primary,
  play: async (context) => {
    const {canvasElement} = context

    const canvas = within(canvasElement)
    const counter = canvas.getByRole("button")

    await userEvent.click(counter)
    await userEvent.click(counter)
  }
}

export default componentMeta

import { composeStories } from "@storybook/testing-react"
import * as stories from "./index.stories"
import { render } from "@testing-library/react"

const {Primary, CountUpTwice} = composeStories(stories)

describe("InteractionTestExample", () => {
  it("初期値が0の時は表示する値も0", () => {
    const rendered = render(<Primary />)

    expect(rendered.getByRole("button")).toHaveTextContent("0")
  })

  it("2回押されたCounterの表示する値は2", async () => {
    const rendered = render(<CountUpTwice/>)

    await CountUpTwice.play?.({canvasElement: rendered.container})
    expect(rendered.getByRole("button")).toHaveTextContent("2")
  })
})

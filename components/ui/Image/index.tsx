import { Img } from "@storybook/components"

export type ImageProps = {
  src: string
}
export const Image = (props: ImageProps) => {
  const { src } = props

  return (<Img src={src} />)
}

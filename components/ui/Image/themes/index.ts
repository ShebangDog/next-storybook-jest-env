import { css, SimpleInterpolation } from "styled-components"
import { Circle, CutCorner, Rectangle, Square, Variants } from "../variants"
import { exhaustiveCheck } from "../../../../common/functions/exhaustiveCheck"

type Theme<PropsType> = (props: PropsType) => SimpleInterpolation

type RectangleTheme = Theme<Rectangle>
const rectangleTheme: RectangleTheme = (props) => css`
  height: ${props.height};
  width: ${props.width};
`

type CutCornerTheme = Theme<CutCorner>
const cutCornerTheme: CutCornerTheme = (props) => css`
  width: ${props.width};
  height: ${props.height};
  border-radius: ${props.borderRadius};
`

type SquareTheme = Theme<Square>
const squareTheme: SquareTheme = (props) => css`
  width: ${props.size};
  height: ${props.size};
`

type CircleTheme = Theme<Circle>
const circleTheme: CircleTheme = (props) => css`
  width: ${props.size};
  height: ${props.size};
  border-radius: 50%;
`

export const theme: Theme<Variants> = (props) => {
  switch (props.kind) {
    case "Rectangle": return rectangleTheme(props)
    case "Square": return squareTheme(props)
    case "Circle": return circleTheme(props)
    case "CutCorner": return cutCornerTheme(props)
    default:  return exhaustiveCheck(props)
  }
}
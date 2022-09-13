import { ColorKind, ColorPalette } from "../../const/ColorPalette"
import { StatelessHomeProps } from "../../../components/page/home/index.stateless"

type GetColor = (colorKind: ColorKind) =>
  (props: { appTheme: StatelessHomeProps["theme"] }) =>
    `#${string}`
export const getColor: GetColor = (colorKind) => (props) =>
  ColorPalette[props.appTheme][colorKind]


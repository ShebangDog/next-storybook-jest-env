import { FC } from "react"
import { StatelessThemeIcon } from "./index.stateless"
import { Theme } from "../../../../models/theme"

export type ThemeIconProps = {
  appTheme: Theme
}

export const ThemeIcon: FC<ThemeIconProps> = (props) => {
  const {appTheme} = props

  return <StatelessThemeIcon appTheme={appTheme} />
}
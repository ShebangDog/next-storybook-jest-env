import { FC } from "react"
import { useRecoilState } from "recoil"
import { appVariants } from "../../../../data/theme/appVariants"
import { StatelessThemeSwitcher } from "./index.stateless"
import { ThemeTuple } from "../../../../models/theme"

export const ThemeSwitcher: FC = () => {
  const [appTheme, switchAppTheme] = useRecoilState(appVariants)

  return <StatelessThemeSwitcher appTheme={appTheme} onSwitch={switchAppTheme} themes={ThemeTuple} />
}

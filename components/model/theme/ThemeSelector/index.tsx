import { FC } from "react"
import { StatelessThemeSelector } from "./index.stateless"
import { Theme, ThemeTuple } from "../../../../models/theme"
import { useRecoilState } from "recoil"
import { appVariants } from "../../../../data/theme/appVariants"

type ThemeSelectorProps = {
  themes: ThemeTuple
}

export const ThemeSelector: FC<ThemeSelectorProps> = (props) => {
  const {themes} = props
  const [selectedTheme, selectTheme] = useRecoilState(appVariants)

  const handleSelectTheme = (theme: Theme) => () => selectTheme(theme)

  return (
    <StatelessThemeSelector
      themes={themes}
      selectedTheme={selectedTheme}
      onSelectTheme={handleSelectTheme}
    />
  )
}

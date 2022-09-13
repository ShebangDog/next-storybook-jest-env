import { FC } from "react"
import styled from "styled-components"
import { ThemeSelector } from "../ThemeSelector"
import { ThemeIcon } from "../ThemeIcon"
import { ThemeTuple } from "../../../../models/theme"
import { useRecoilValue } from "recoil"
import { appVariants } from "../../../../data/theme/appVariants"

type ExpandableThemeSelectorStatelessProps = {
  isExpand: boolean
  switchExpand: () => void
  themes: ThemeTuple
}

export const StatelessExpandableThemeSelector: FC<ExpandableThemeSelectorStatelessProps> = (props) => {
  const {isExpand, switchExpand, themes} = props
  const appTheme = useRecoilValue(appVariants)

  return (
    <EntryPoint onClick={switchExpand}>
      {!isExpand
        ? <ThemeIcon appTheme={appTheme}/>
        : <ThemeSelector themes={themes}/>
      }
    </EntryPoint>
  )
}

const EntryPoint = styled.div`
  padding: 8px;
  width: 120px;
  background-color: #f9f9fb;
`

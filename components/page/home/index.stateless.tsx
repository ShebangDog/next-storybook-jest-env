import styled from "styled-components"
import { Theme, ThemeTuple } from "../../../models/theme"
import { getColor } from "../../../common/functions/getColor"
import { ThemeSelector } from "../../model/theme/ThemeSelector"

export type StatelessHomeProps = {
  theme: Theme
  themes: ThemeTuple
}
export const StatelessHome = (props: StatelessHomeProps) => {
  const {theme, themes} = props

  return (
    <Container appTheme={theme}>
      <ThemeSelector themes={themes} />
      <CenterText>Mode: {theme} theme</CenterText>
      <CenterText>Hello World</CenterText>
    </Container>
  )
}

const Container = styled.div<{ appTheme: StatelessHomeProps["theme"] }>`
  background: ${getColor("secondary")};
  color: ${getColor("primary")}
`

const CenterText = styled.p`
  font-size: 24px;
  text-align: center;
`

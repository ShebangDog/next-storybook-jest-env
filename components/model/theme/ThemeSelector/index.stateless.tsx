import { FC } from "react"
import styled from "styled-components"
import { Theme, ThemeTuple } from "../../../../models/theme"
import { ThemeIcon } from "../ThemeIcon"

export type StatelessThemeSelectorProps = {
  themes: ThemeTuple
  selectedTheme: Theme
  onSelectTheme: (theme: Theme) => () => void
}

export const StatelessThemeSelector: FC<StatelessThemeSelectorProps> = (props) => {
  const {themes, selectedTheme, onSelectTheme} = props

  return (
    <Container>
      {themes
        .map(theme => (
          <Wrapper
            selected={theme === selectedTheme}
            onClick={onSelectTheme(theme)}
          >
            <ThemeIcon appTheme={theme}/>
          </Wrapper>
        ))
      }
    </Container>
  )
}

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-inline: 0;
`

const Wrapper = styled.li<{ selected: boolean }>`
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  display: flex;
  justify-content: flex-start;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.selected ? "#f0f0f0" : "transparent"};
  border-radius: 4px;

  :hover {
    background: #b6b6b6;
  }
`
import { Theme, ThemeTuple } from "../../../../models/theme"
import { FC } from "react"
import { Button } from "../../../ui/Button"
import styled from "styled-components"

type StatelessThemeSwitcherProps = {
  appTheme: Theme
  onSwitch: (theme: Theme) => void
  themes: typeof ThemeTuple
}
export const StatelessThemeSwitcher: FC<StatelessThemeSwitcherProps> = (props) => {
  const {appTheme, onSwitch, themes} = props
  type HandleSwitch = (them: Theme) => () => void
  const handleSwitch: HandleSwitch = (theme) => () => onSwitch(theme)

  return (
    <Container appTheme={appTheme}>
      <StyledText appTheme={appTheme}>Mode: {appTheme}</StyledText>
      <ButtonContainer>
        {themes.map(theme => <li><Button text={theme} onClick={handleSwitch(theme)}/></li>)}
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div<{appTheme: Theme}>`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  
  background: ${props => 
                props.appTheme === "Light" ? "#fff" :
                props.appTheme === "Dark" ? "#000" :
                "#fff"
              };
`

const StyledText = styled.p<{appTheme: Theme}>`
  text-align: center;
  color: ${props => 
            props.appTheme === "Light" ? "#000" :
            props.appTheme === "Dark" ? "#fff" :
            "#000"
          };
`

const ButtonContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`

import { FC } from "react"
import { Theme } from "../../../../models/theme"
import { exhaustiveCheck } from "../../../../common/functions/exhaustiveCheck"
import { SystemIcon } from "./module/SystemIcon"
import { LightIcon } from "./module/LightIcon"
import { DarkIcon } from "./module/DarkIcon"
import React from "react"
import styled from "styled-components"

type ThemeIconStatelessProps = {
  appTheme: Theme
}

export const StatelessThemeIcon: FC<ThemeIconStatelessProps> = (props) => {
  const {appTheme} = props

  const Icon: FC<{appTheme: Theme}> = (props) => {switch (props.appTheme) {
    case "System": return <SystemIcon/>
    case "Light": return <LightIcon/>
    case "Dark": return <DarkIcon/>
    default: exhaustiveCheck(props.appTheme)
  }}

  return (
    <Container>
      <Icon appTheme={appTheme} />
      {appTheme}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 8px;
`

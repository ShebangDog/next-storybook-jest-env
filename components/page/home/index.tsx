import { FC } from "react"

import { useRecoilValue } from "recoil"
import { themeState } from "../../../data/theme"
import { StatelessHome } from "./index.stateless"
import { ThemeTuple } from "../../../models/theme"

type HomeProps = never
export const Home: FC<HomeProps> = () => {
  const theme = useRecoilValue(themeState)

  return <StatelessHome theme={theme} themes={ThemeTuple} />
}

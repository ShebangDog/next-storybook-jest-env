import { selector } from "recoil"
import { themeState } from "../atom"
import { convertAppVariants } from "./module/convertAppVariants"
import { Theme } from "../../../models/theme"

export const appVariants = selector<Theme>({
  key: "theme-state-app-kind",
  get: ({get}) => convertAppVariants(get(themeState)),
  set: ({set}, newValue) => set(themeState, newValue)
})

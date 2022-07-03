import { atom } from "recoil"
import { Theme } from "../../models/theme"

export const themeState = atom<Theme>({
  key: "theme-state",
  default: "System",
})

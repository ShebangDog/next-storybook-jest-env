import { Theme } from "../../../models/theme"

export type ColorKind = "primary" | "secondary" | "tertiary"
type ColorPalettes = Record<ColorKind, `#${string}`>
type ThemePalettes = Record<Theme, ColorPalettes>

export const ColorPalette: ThemePalettes = {
  Dark: {
    "primary": "#fff",
    "secondary": "#000",
    "tertiary": "#fff",
  },
  System: {
    "primary": "#000",
    "secondary": "#fff",
    "tertiary": "#000",
  },
  Light: {
    "primary": "#000",
    "secondary": "#fff",
    "tertiary": "#000",
  },
}

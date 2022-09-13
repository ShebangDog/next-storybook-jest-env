const themeTuple = ["System", "Light", "Dark"] as const

type ReadonlyThemeTuple = typeof themeTuple
export type ThemeTuple = {
  -readonly [k in keyof ReadonlyThemeTuple]: ReadonlyThemeTuple[k]
}
export type Theme = ThemeTuple[number]

export const ThemeTuple = themeTuple

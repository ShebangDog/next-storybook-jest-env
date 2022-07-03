import { Theme } from "../../../../../models/theme"
import { AppVariants } from "../../index"

type ConvertAppVariants = (theme: Theme) => AppVariants
export const convertAppVariants: ConvertAppVariants = (theme) =>  {

  return theme
}
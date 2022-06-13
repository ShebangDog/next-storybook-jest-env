import { BorderRadius, Height, Size, Width } from "../../../../common/types/attributes"

export type {
  Variants,
  Rectangle,
  Square,
  Circle,
  CutCorner,
}

type Variants = Rectangle | Square | Circle | CutCorner

type BaseType<Tag extends string, Props extends Record<string, unknown>> = { kind: Tag } & Props

type Rectangle = BaseType<"Rectangle", {
  width?: Width
  height?: Height
}>

type Square = BaseType<"Square", {
  size: Width | Height | Size
}>

type Circle = BaseType<"Circle", { size: Width | Height | Size }>

type CutCorner = BaseType<"CutCorner", {
  width?: Width,
  height?: Height,
  borderRadius: BorderRadius
}>
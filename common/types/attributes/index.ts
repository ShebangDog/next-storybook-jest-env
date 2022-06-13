import { Flavor } from "../flavor"

type Url = Flavor<string, "attribute-source-url">

export type Source = Url


export type Alt = Flavor<string, "attribute-alt">
export type Width = Flavor<string, "attribute-width">
export type Height = Flavor<string, "attribute-height">
export type Size = Flavor<string, "attribute-size">
export type BorderRadius = Flavor<string, "attribute-border-radius">

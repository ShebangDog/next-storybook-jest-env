export type Flavor<T, Id extends string> = T & {
  id?: Id
}

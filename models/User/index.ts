import { Flavor } from "../../common/types/flavor"
import { Source } from "../../common/types/attributes"

export type User = {
  id: Id
  age: Age
  name: Name
  profile: Profile & Source
}

type Id = Flavor<string, "user-id">
type Age = Flavor<number, "user-age">
type Name = Flavor<string, "user-name">
type Profile = Flavor<string, "user-profile">

---
to: "<%= hasStatelessComponent ? `./components/model/${modelName}/${componentName}/index.stateless.ts` : null %>"
---

import { FC } from "react"

type Stateless<%= componentName %>Props = {

}

export const Stateless<%= componentName %>: FC<Stateless<%= componentName %>Props> = (props) => {


}

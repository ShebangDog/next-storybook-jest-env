---
to: "<%= hasStatelessComponent ? `./components/model/${modelName}/${componentName}/index.stateless.ts` : null %>"
---

import { FC } from "react"

type <%= componentName %>StatelessProps = {

}

export const Stateless<%= componentName %>: FC<<%= componentName %>StatelessProps> = (props) => {


}

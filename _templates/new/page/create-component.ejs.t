---
to: './components/page/<%= componentName %>/index.tsx'
---

import { FC } from "react"
import { Stateless<%= componentName%>} from "./index.stateless"

type <%= componentName %>Props = {

}

export const <%= componentName %>: FC<<%= componentName %>Props> = (props) => {
    const {} = props

    return (
        <Stateless<%= componentName %> />
    )
}

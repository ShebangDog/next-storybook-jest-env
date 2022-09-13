import { FC, useState } from "react"
import { StatelessExpandableThemeSelector } from "./index.stateless"
import { ThemeTuple } from "../../../../models/theme"

type ExpandableThemeSelectorProps = {
  themes: ThemeTuple
}

export const ExpandableThemeSelector: FC<ExpandableThemeSelectorProps> = (props) => {
  const {themes} = props
  const [isExpand, setIsExpand] = useState(false)

  const handleSwitchExpand = () => setIsExpand(prevState => !prevState)

  return (
    <StatelessExpandableThemeSelector
      themes={themes}
      isExpand={isExpand}
      switchExpand={handleSwitchExpand}
    />
  )
}

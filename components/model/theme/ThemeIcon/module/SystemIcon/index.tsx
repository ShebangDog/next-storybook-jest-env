import { FC } from "react"

type SystemIconProps = {}
export const SystemIcon: FC<SystemIconProps> = () => {

  return (
    <svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
      <path fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z"/>
    </svg>
  )
}

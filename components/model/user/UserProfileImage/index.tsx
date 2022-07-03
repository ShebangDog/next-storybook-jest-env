import { User } from "../../../../models/user"
import { Image, ImageAttributes } from "../../../ui/Image"
import styled from "styled-components"
import { Circle } from "../../../ui/Image/variants"

type UserProfileShapeProps = Omit<Circle, "kind">
type UserProfileAttributeProps = Omit<ImageAttributes, "src"> & {
  profile: User["profile"]
}

export type UserProfileImageProps = UserProfileShapeProps & UserProfileAttributeProps
export const UserProfileImage = (props: UserProfileImageProps) => {
  return (
    <Frame>
      <Image kind="Circle" {...props} src={props.profile}/>
    </Frame>
  )
}

const Frame = styled.div`
`

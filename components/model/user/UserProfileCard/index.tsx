import { UserProfileImage, UserProfileImageProps } from "../UserProfileImage"
import { User } from "../../../../models/user"
import styled from "styled-components"

type UserProfileProps = User
type UserProfileHandlers = {
  onClick: (name: string) => void
}

export type UserProfileCardProps = UserProfileImageProps & UserProfileProps & UserProfileHandlers
export const UserProfileCard = (props: UserProfileCardProps) => {
  const { profile, name, alt, age, id, size, onClick  } = props

  const handleClick = () => onClick(name)

  return (
    <Container onClick={handleClick}>
      <UserProfileImage size={size} alt={alt} profile={profile} />
      <ProfileContainer>
        <p onClick={handleClick}>{name}</p>
        <p>{age}</p>
      </ProfileContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const ProfileContainer = styled.div`
`

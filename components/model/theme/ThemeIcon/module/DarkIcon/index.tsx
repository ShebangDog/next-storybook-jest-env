import styled from "styled-components"

export const DarkIcon = () => {

  return (
    <RotateSvg style={{width:"24px",height:"24px"}} viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z"/>
    </RotateSvg>
  )
}

const RotateSvg = styled.svg`
  transform: rotate(30deg);
`

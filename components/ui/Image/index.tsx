import styled from "styled-components"

export type ImageProps = {
  src: string
  alt: string
  width: string
}
export const Image = (props: ImageProps) => {
  const {src, alt, width} = props

  return (
    <ImageFrame width={width}>
      <StyledImage src={src} alt={alt}/>
    </ImageFrame>
  )
}

const ImageFrame = styled.div<{width: string}>`
  width: ${props => props.width}
`

const StyledImage = styled.img`
  width: 100%;
`

import styled from "styled-components"
import { Alt, Source } from "../../../common/types/attributes"
import React from "react"
import { Variants } from "./variants"
import { theme } from "./themes"

export type ImageStyles = Variants

export type ImageAttributes = {
  src: Source
  alt: Alt
}

export type ImageProps = ImageAttributes & ImageStyles
export const Image = (props: ImageProps) => {
  const {src, alt} = props

  return (
    <ImageFrame {...props}>
      <StyledImage src={src} alt={alt}/>
    </ImageFrame>
  )
}

const ImageFrame = styled.div<ImageStyles>`
  display: flex;
  overflow: hidden;
  ${theme};
`

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`

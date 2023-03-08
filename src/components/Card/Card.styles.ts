import Lottie from 'lottie-react'
import styled from 'styled-components'
import { BoxStyles, FontStyles } from 'styles'

export interface CardContentSectionProps {
	fullWidth?: boolean
}

export const Card = styled.section`
  ${FontStyles.Raleway}
  padding: 16px;
`

export const CardTitle = styled.h3`
  text-align: center;
  font-size: 3rem;
  color: #ffffff;
`

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`

export const CardContentSection = styled.section<CardContentSectionProps>`
  width: 100%;
  height: 100%;
  ${(props) => props.fullWidth && 'grid-column: 1 / 3;'}
  &:first-of-type {
    ${BoxStyles.CenterFlex}
  }
`

export const CardLottie = styled(Lottie)`
  height: 70%;
`

export const CardDesc = styled.p`
  font-size: 1.8rem;
  color: #ffffff;
`

export const CardImg = styled.img`
  width: 10rem;
  height: 10rem;
  padding: 6px;
  border-radius: 50%;
`

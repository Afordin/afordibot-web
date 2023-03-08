import styled from 'styled-components'
import { FontStyles } from 'styles'

export const Card = styled.section`
  ${FontStyles.Raleway}
  padding: 1.5rem;
`

export const CardTitle = styled.h3`
  text-align: center;
  font-size: 3rem;
  color: #ffffff;
`

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
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

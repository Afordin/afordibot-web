import styled from 'styled-components'
import { BoxStyles } from 'styles'

export interface RankingToggleButtonProps {
	active: boolean
}

export const RankingToggleButton = styled.button<RankingToggleButtonProps>`
  width: 6rem;
  height: 26px;
  background-color: #555555;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  & > div {
    margin: ${({ active }) => (active ? '0 34px 0 0' : '0 0 0 34px')};
  }
`

export const RankingToggleCircle = styled.div`
  ${BoxStyles.CenterFlex}
  height: 100%;
  aspect-ratio: 1 / 1;
  background-image: linear-gradient(to right, #3b82f6, #9333ea);
  border-radius: 50%;
  scale: 1.3;
  transition: margin 0.3s ease-in-out;
`

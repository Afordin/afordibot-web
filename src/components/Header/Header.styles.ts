import styled from 'styled-components'
import { TitleStyles } from 'styles'

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

export const HeaderTitle = styled(TitleStyles.H1)`
  padding: 2rem;
  background-image: linear-gradient(40deg, #fc00ff 0%, #fc00ff 10%, #00fffc 50%, #fffc00 85%, #fffc00 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  transition: filter 0.3s ease-in-out;
  user-select: none;
  &:hover {
    filter: drop-shadow(0 0 1rem #00bbbb);
  }
`

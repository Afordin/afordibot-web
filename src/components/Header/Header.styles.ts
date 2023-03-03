import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`

export const Title = styled.h1`
  width: 100%;
  background-image: linear-gradient(40deg, #fc00ff 0%, #fc00ff 10%, #00fffc 50%, #fffc00 85%, #fffc00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: clamp(2rem, 30vw, 34rem);
  font-family: 'Root Of Life';
  text-align: center;
  transition: filter 0.3s ease-in-out;
  user-select: none;
  &:hover {
      filter: drop-shadow(0 0 1rem #00bbbb);
  }
`

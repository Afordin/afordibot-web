import styled from 'styled-components'

export const RankTitleContainer = styled.div`
  display: grid;
  place-items: center;
`

export const RankTitle = styled.h2`
  background-clip: text;
  color: transparent;
  font-family: 'Root Of Life';
  font-size: clamp(3rem, 20vw, 7rem);
  transition: animation 0.3s ease-in-out;
  animation: bcMove 5s ease-in infinite;
  /* line-height: 12rem; */
`

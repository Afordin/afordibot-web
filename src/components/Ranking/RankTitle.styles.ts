import styled from 'styled-components'

export const RankTitleContainer = styled.div`
  display: grid;
  place-items: center;
`

export const RankTitle = styled.h2`
  background-clip: text;
  color: transparent;
  transition: animation 0.3s ease-in-out;
  animation: bcMove 5s ease-in infinite;
  font-family: 'RootOfLife';
  font-size: clamp(3rem, 20vw, 7rem);
  /* line-height: 12rem; */
`

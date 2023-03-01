import styled from 'styled-components'

export const RankingListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  margin: 30rem;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  background-color: bisque;
  transition: scale 0.3s ease, border 0.3s ease, box-shadow 0.5s ease;
  &:hover {
    scale: 1.03;
    border: 0.5rem solid cyan;
    box-shadow: 0 0 1rem 0.2rem #000;
  }
`

export const Trophy = styled.img`
  margin: 0 0.5rem 0 0.7rem;
  height: 4rem;
  width: 4rem;
`

export const Place = styled.div`
  margin: 0 0.2rem 0 0;
  font-size: 3rem;
`

export const Name = styled.div`
  margin: 0 5rem 0 0;
  font-size: 3rem;
`

export const Count = styled.div`
  margin: 0 1.5rem 0 0;
  font-size: 3rem;
`

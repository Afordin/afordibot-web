import styled from 'styled-components'

export const RankingListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.5rem solid transparent;
  border-radius: 1rem;
  background-color: bisque;
  transition: scale 0.3s ease, border 0.3s ease, box-shadow 0.5s ease;
  &:hover {
    border: 0.5rem solid cyan;
    box-shadow: 0 0 1rem 0.2rem #000;
    scale: 1.03;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
`

export const Trophy = styled.img`
  height: 100%;
`

export const Place = styled.div`
  font-size: 3rem;
`

export const Name = styled.div`
  font-size: 3rem;
`

export const Count = styled.div`
  font-size: 3rem;
`

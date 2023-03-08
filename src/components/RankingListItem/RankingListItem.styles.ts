import styled from 'styled-components'
import { FontStyles } from 'styles'

export const RankingListItem = styled.li`
  ${FontStyles.Raleway}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 16px;
  background-color: #333333;
  color: #ffffff;
  font-size: 2.6rem;
  border-radius: 6px;
`

export const RankingTopImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ItemText = styled.span`
  font-size: 2rem;
`

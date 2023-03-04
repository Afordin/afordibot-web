import styled from 'styled-components'
import { BoxStyles } from 'styles'

export const UsersRanking = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100%;
`

export const RankingHeaderContainer = styled(BoxStyles.Box)`
  width: 100%;
  border-radius: 12px;
`

export const RankingHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
`

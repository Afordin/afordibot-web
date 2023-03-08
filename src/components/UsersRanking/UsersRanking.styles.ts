import styled from 'styled-components'
import { BoxStyles, TitleStyles } from 'styles'

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

export const RankingTitle = styled(TitleStyles.H2)`
  color: #ffffff;
  text-transform: capitalize;
`

export const RankingTopContainer = styled.div`
  width: 100%;
  & > li {
    height: 72px;
    border-bottom: 1px solid #888888;
  }
  & > li:first-of-type {
    border-radius: 8px 8px 0 0;
  }
  & > li:nth-of-type(2) {
    border-radius: 0;
  }
  & > li:last-of-type {
    border-radius: 0 0 8px 8px;
    border-bottom: none;
  }
`

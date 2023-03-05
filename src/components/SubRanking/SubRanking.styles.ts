import styled from 'styled-components'
import { BoxStyles, FontStyles, TitleStyles } from 'styles'

export interface SubRankingSectionProps {
	centered?: boolean
}

export const SubRanking = styled(BoxStyles.Box).attrs({ as: 'article' })`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`

export const SubRankingContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: #1e1e1e;
  border-radius: 8px;
`

export const SubRankingSection = styled.section<SubRankingSectionProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ centered }) => (centered ? 'center' : 'flex-start')};
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')};
  width: 100%;
  height: 100%;
  padding: 2rem;
`

export const SubRankingTitle = styled(TitleStyles.H3)`
  color: #ffffff;
`

export const SubRankingList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
`

export const SubRankingItem = styled.li`
  ${FontStyles.Raleway}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;
  background-color: #333333;
  color: #ffffff;
  font-size: 18px;
  border-radius: 6px;
`

export const SubRankingUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const SubRankingImage = styled.img`
  width: 16rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
`

export const ViewMoreButton = styled.button`
  ${BoxStyles.CenterFlex}
  width: 100%;
  padding: 6px;
  background-color: transparent;
  color: green;
`

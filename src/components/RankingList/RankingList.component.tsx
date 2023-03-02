import * as S from './RankingList.styles'
import { FC, ReactElement } from 'react'

export interface RankingListProps {
	children: ReactElement | ReactElement[]
}

export const RankingList: FC<RankingListProps> = ({ children }): ReactElement => {
	return (
		<S.RankingListContainer>
			<S.RankingList>{children}</S.RankingList>
		</S.RankingListContainer>
	)
}

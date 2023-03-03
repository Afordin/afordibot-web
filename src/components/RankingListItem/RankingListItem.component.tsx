import * as S from './RankingListItem.styles'
import { FC, ReactElement } from 'react'

interface RankingListProps {
	trophy?: string
	place: string | number
	name: string
	count: string | number
}

export const RankingListItem: FC<RankingListProps> = ({ trophy, place, name, count }): ReactElement => {
	return (
		<S.RankingListItem>
			<S.Container>
				{trophy && <S.Trophy src={trophy} alt={`trophy-${place}`} />}
				<S.Place>#{place}</S.Place>
				<S.Name>{name}</S.Name>
			</S.Container>
			<S.Count>{count}</S.Count>
		</S.RankingListItem>
	)
}

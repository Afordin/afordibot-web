import * as S from './RankingListItem.styles'
import { FC, ReactElement } from 'react'

interface RankingListProps {
	trophy?: string
	place: number
	name: string
	count: number
}

export const RankingListItem: FC<RankingListProps> = ({ trophy, place, name, count }): ReactElement => {
	return (
		<S.RankingListItem>
			{trophy && <S.Trophy src={trophy} alt={`trophy-${place}`} />}
			<S.Place>#{place}</S.Place>
			<S.Name>{name}</S.Name>
			<S.Count>{count}j</S.Count>
		</S.RankingListItem>
	)
}

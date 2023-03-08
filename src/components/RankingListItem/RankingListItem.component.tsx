import * as S from './RankingListItem.styles'
import { Trophy, TrophyStyles } from 'components/Trophy'
import { FC, ReactElement } from 'react'

interface RankingListProps {
	place: number
	name: string
	count: string | number
}

const places: TrophyStyles.TrophyPlaces[] = ['first', 'second', 'third']

export const RankingListItem: FC<RankingListProps> = ({ place, name, count }): ReactElement => {
	return (
		<S.RankingListItem>
			<S.Container>
				{place < 3 && <Trophy place={places[place]} />}
				<S.Place>#{place + 1}</S.Place>
				<S.Name>{name}</S.Name>
			</S.Container>
			<S.Count>{count}</S.Count>
		</S.RankingListItem>
	)
}

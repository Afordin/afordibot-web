import * as S from './RankingListItem.styles'
import { Trophy, TrophyStyles } from 'components/Trophy'
import { FC, ReactElement } from 'react'

export interface RankingListProps {
	place: number
	name: string
	count: string | number
}

export interface RankingTopProps extends RankingListProps {
	image: string
}

const places: TrophyStyles.TrophyPlaces[] = ['first', 'second', 'third']

export const RankingListItem: FC<RankingListProps> = ({ place, name, count }): ReactElement => {
	return (
		<S.RankingListItem>
			<S.Container>
				{place < 3 && <Trophy place={places[place]} />}
				<S.ItemText>#{place + 1}</S.ItemText>
				<S.ItemText>{name}</S.ItemText>
			</S.Container>
			<span>{count}</span>
		</S.RankingListItem>
	)
}

export const RankingListTop: FC<RankingTopProps> = ({ place, name, count, image }): ReactElement => {
	return (
		<S.RankingListItem>
			<S.Container>
				<S.RankingTopImage src={image} alt="winner" />
				<Trophy place={places[place]} />
				<S.ItemText>#{place + 1}</S.ItemText>
				<S.ItemText>{name}</S.ItemText>
			</S.Container>
			<span>{count}</span>
		</S.RankingListItem>
	)
}

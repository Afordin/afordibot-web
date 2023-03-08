import * as S from './SubRanking.styles'
import { Loading } from 'components/Loading'
import { Trophy, TrophyStyles } from 'components/Trophy'
import { FC, Fragment, ReactElement, useCallback, useMemo } from 'react'
import { Separator } from 'styles'

export interface SubRankingUser {
	name: string
	value: number
	imageUrl: string
}

export interface SubRankingProps {
	title: string
	ranking: SubRankingUser[]
	rankingName: string
	isLoaded: boolean
}

const places: TrophyStyles.TrophyPlaces[] = ['first', 'second', 'third']

export const SubRanking: FC<SubRankingProps> = ({ title, ranking, rankingName, isLoaded }): ReactElement => {
	const cutRanking = useMemo(() => ranking.slice(0, 3), [ranking])

	const renderRanking = useCallback(
		(item: SubRankingUser, index: number) => (
			<S.SubRankingItem key={`${rankingName}-${index}`}>
				<S.SubRankingUser>
					<Trophy place={places[index]} />
					<span>#{index + 1}</span>
					<span>{item.name}</span>
				</S.SubRankingUser>
				<span>{item.value}</span>
			</S.SubRankingItem>
		),
		[rankingName],
	)

	return (
		<S.SubRanking>
			<S.SubRankingContent>
				{isLoaded ? (
					<Fragment>
						<S.SubRankingSection>
							<S.SubRankingTitle>{title}</S.SubRankingTitle>
							<Separator />
							<S.SubRankingList>{cutRanking.map(renderRanking)}</S.SubRankingList>
						</S.SubRankingSection>
						<S.SubRankingSection centered>
							{cutRanking.length > 0 && <S.SubRankingImage src={cutRanking[0].imageUrl} alt='winner' />}
						</S.SubRankingSection>
					</Fragment>
				) : (
					<Loading />
				)}
			</S.SubRankingContent>
		</S.SubRanking>
	)
}

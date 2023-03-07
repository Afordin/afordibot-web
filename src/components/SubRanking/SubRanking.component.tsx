import * as S from './SubRanking.styles'
import { Trophy, TrophyStyles } from 'components/Trophy'
import { FC, ReactElement, useCallback, useMemo } from 'react'
import { Separator } from 'styles'
import { Loading } from 'components/Loading'

export interface SubRankingUser {
	name: string
	value: number
	// TODO - add image url as optional
}

export interface SubRankingProps {
	title: string
	ranking: SubRankingUser[]
	isLoaded: boolean
}

const places: TrophyStyles.TrophyPlaces[] = ['first', 'second', 'third']

export const SubRanking: FC<SubRankingProps> = ({ title, ranking, isLoaded }): ReactElement => {
	const cutRanking = useMemo(() => ranking.slice(0, 3), [ranking])

	const renderRanking = useCallback(
		(item: SubRankingUser, index: number) => (
			<S.SubRankingItem key={`${title}-${item.name}-${index}`}>
				<S.SubRankingUser>
					<Trophy place={places[index]} />
					<span>#{index + 1}</span>
					<span>{item.name}</span>
				</S.SubRankingUser>
				<span>{item.value}</span>
			</S.SubRankingItem>
		),
		[title],
	)

	return (
		<S.SubRanking>
			<S.SubRankingContent>
        {isLoaded ? <>
          <S.SubRankingSection>
            <S.SubRankingTitle>{title}</S.SubRankingTitle>
            <Separator />
            <S.SubRankingList>{cutRanking.map(renderRanking)}</S.SubRankingList>
          </S.SubRankingSection>
          <S.SubRankingSection centered>
              <S.SubRankingImage
                // TODO - add winner image
                src='https://static-cdn.jtvnw.net/jtv_user_pictures/e600242f-ca1d-4941-85f2-8849c125dd6e-profile_image-70x70.png'
                alt='winner'
              />
          </S.SubRankingSection>
        </> : <Loading />}
			</S.SubRankingContent>
		</S.SubRanking>
	)
}

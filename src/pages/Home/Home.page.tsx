import * as S from './Home.styles'
import { Carousel } from 'components/Carousel'
import { Header } from 'components/Header'
import { SubRanking } from 'components/SubRanking'
import { UsersRanking } from 'components/UsersRanking'
import { HomeContextModule } from 'context'
import { useRanking } from 'hooks'
import { FC, Fragment, ReactElement, useMemo, useState } from 'react'
import { transformRanking } from 'utils'

export const Home: FC = (): ReactElement => {
	const { ranking: channelRanking } = useRanking('channels')
	const { ranking: monthlyRanking } = useRanking('monthly')
	const { ranking: weeklyRanking } = useRanking('weekly')
	const [rankingType, setRankingType] = useState<HomeContextModule.RankingType>('jolines')
	const transformSubRanking = useMemo(() => transformRanking(rankingType), [rankingType])

	return (
		<Fragment>
			<Header />
			<Carousel>{/* TODO - add carousel cards */}</Carousel>
			<HomeContextModule.HomeContext.Provider value={{ rankingType, setRankingType }}>
				<S.RankingSection>
					<UsersRanking />
					<S.SubRankingSection>
						<SubRanking title='Ranking por canales' ranking={transformSubRanking(channelRanking)} />
						<SubRanking title='Ranking mensual' ranking={transformSubRanking(monthlyRanking)} />
						<SubRanking title='Ranking semanal' ranking={transformSubRanking(weeklyRanking)} />
					</S.SubRankingSection>
				</S.RankingSection>
			</HomeContextModule.HomeContext.Provider>
		</Fragment>
	)
}

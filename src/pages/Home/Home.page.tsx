import * as S from './Home.styles'
import { Carousel } from 'components/Carousel'
import { Header } from 'components/Header'
import { UsersRanking } from 'components/UsersRanking'
import { HomeContextModule } from 'context'
import { FC, Fragment, ReactElement, useState } from 'react'

export const Home: FC = (): ReactElement => {
	const [rankingType, setRankingType] = useState<HomeContextModule.RankingType>('jolines')
	return (
		<Fragment>
			<Header />
			<Carousel>{/* TODO - add carousel cards */}</Carousel>
			<HomeContextModule.HomeContext.Provider value={{ rankingType, setRankingType }}>
				<S.RankingSection>
					<UsersRanking />
				</S.RankingSection>
			</HomeContextModule.HomeContext.Provider>
		</Fragment>
	)
}

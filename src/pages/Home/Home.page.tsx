import * as S from './Home.styles'
import { Card } from 'components/Card'
import { Carousel } from 'components/Carousel'
import { Header } from 'components/Header'
import { SubRanking } from 'components/SubRanking'
import { UsersRanking } from 'components/UsersRanking'
import { HomeContextModule } from 'context'
import { useRanking } from 'hooks'
import { FC, Fragment, ReactElement, useMemo, useState } from 'react'
import { transformRanking } from 'utils'
import { porkyFear, porkyRunning } from 'assets'
import { Footer } from 'components/Footer'

export const Home: FC = (): ReactElement => {
	const { ranking: channelRanking, isRankingLoaded: isChannelLoaded } = useRanking('channels')
	const { ranking: monthlyRanking } = useRanking('monthly')
	const { ranking: weeklyRanking } = useRanking('weekly')
	const [rankingType, setRankingType] = useState<HomeContextModule.RankingType>('jolines')
	const transformSubRanking = useMemo(() => transformRanking(rankingType), [rankingType])

	return (
		<Fragment>
			<Header />
			<Carousel>
				<Card title='¿Qué es?' desc='Un bot.' />
				<Card
					title='¿Como funciona?'
					desc='El bot busca la palabra clave "jolines" en los canales de Twitch. Cada vez que alguien la usa, se suman puntos. Al final de la semana y del mes, se hace un ranking para saber que canal y usuario lo a dicho con mas frecuencia. ¡Es una competencia entre usuarios!'
				/>
				<Card
					title='Jolines'
					image={porkyFear}
					imageAlt='porkyfear'
					desc='Tenemos dos palabras clave para este comando, "jolin" y "!jolines". La primera de ellas suma puntos para el ranking y el comando !jolines te muestra tus jolines actuales o los jolines de otro usuario'
				/>
				<Card
					title='Aflores'
					image={porkyRunning}
					imageAlt='porkyrunning'
					desc='Tambien esta la opcion de poder sumar y ver la cantidad de aflores que regalas! '
				/>
			</Carousel>
			<HomeContextModule.HomeContext.Provider value={{ rankingType, setRankingType }}>
				<S.RankingSection>
					<UsersRanking />
					<S.SubRankingSection>
						<SubRanking
							title='Ranking por canales'
							ranking={transformSubRanking(channelRanking)}
							isLoaded={isChannelLoaded}
						/>
						<SubRanking
							title='Ranking mensual'
							ranking={transformSubRanking(monthlyRanking)}
							isLoaded={isChannelLoaded}
						/>
						<SubRanking
							title='Ranking semanal'
							ranking={transformSubRanking(weeklyRanking)}
							isLoaded={isChannelLoaded}
						/>
					</S.SubRankingSection>
				</S.RankingSection>
			</HomeContextModule.HomeContext.Provider>
			<Footer />
		</Fragment>
	)
}

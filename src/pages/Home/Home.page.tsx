import * as S from './Home.styles'
import { aflor, flameDuck, porkyHappy } from 'assets'
import { Card } from 'components/Card'
import { Carousel } from 'components/Carousel'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { SubRanking } from 'components/SubRanking'
import { UsersRanking } from 'components/UsersRanking'
import { HomeContextModule } from 'context'
import { useRanking } from 'hooks'
import { FC, Fragment, ReactElement, useMemo, useState } from 'react'
import { getRandomAflor, getRandomJolin, transformRanking } from 'utils'

export const Home: FC = (): ReactElement => {
	const { ranking: channelRanking, isRankingLoaded: isChannelLoaded } = useRanking('channels')
	const { ranking: monthlyRanking, isRankingLoaded: isMonthlyLoaded } = useRanking('monthly')
	const { ranking: weeklyRanking, isRankingLoaded: isWeeklyLoaded } = useRanking('weekly')
	const [rankingType, setRankingType] = useState<HomeContextModule.RankingType>('jolines')
	const transformSubRanking = useMemo(() => transformRanking(rankingType), [rankingType])

	return (
		<Fragment>
			<S.LandingContainer>
				<Header />
				<Carousel>
					<Card title='¿Qué es?' lottie={flameDuck}>
						Un bot
					</Card>
					<Card title='Vale, ahora en serio...'>
						El bot busca la palabra clave "jolines" en los canales de Twitch. Cada vez que alguien la usa, se suman
						puntos. Al final de la semana y del mes, se hace un ranking para saber que canal y usuario lo a dicho con
						mas frecuencia. ¡Es una competencia entre usuarios!
					</Card>
					<Card title={`Jolines ${getRandomJolin()}`} lottie={porkyHappy}>
						Tenemos dos palabras clave para este comando, "jolin" y "!jolines". La primera de ellas suma puntos para el
						ranking y el comando !jolines te muestra tus jolines actuales o los jolines de otro usuario
					</Card>
					<Card title={`Aflores ${getRandomAflor()}`} lottie={aflor}>
						Tambien esta la opcion de poder sumar y ver la cantidad de aflores que regalas!
					</Card>
				</Carousel>
			</S.LandingContainer>
			<HomeContextModule.HomeContext.Provider value={{ rankingType, setRankingType }}>
				<S.RankingSection>
					<UsersRanking />
					<S.SubRankingSection>
						<SubRanking
							title='Ranking por canales'
							ranking={transformSubRanking(channelRanking)}
							rankingName='channels'
							isLoaded={isChannelLoaded}
						/>
						<SubRanking
							title='Ranking mensual'
							ranking={transformSubRanking(monthlyRanking)}
							rankingName='monthly'
							isLoaded={isMonthlyLoaded}
						/>
						<SubRanking
							title='Ranking semanal'
							ranking={transformSubRanking(weeklyRanking)}
							rankingName='weekly'
							isLoaded={isWeeklyLoaded}
						/>
					</S.SubRankingSection>
				</S.RankingSection>
				<Footer />
			</HomeContextModule.HomeContext.Provider>
		</Fragment>
	)
}

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
					<Card title='¿Qué es AfordiBot?' lottie={flameDuck}>
						<p>
							Un bot especificamente diseñado para apoderarse el canal de{' '}
							<S.Link href='https://www.twitch.tv/afor_digital' target='_blank' rel='noreferrer'>
								@afor_digital
							</S.Link>
							.
						</p>
						<p>Encargado de vengar a los inocentes asesinados injustamente en el kukoro.</p>
					</Card>
					<Card title='Vale, ahora en serio...'>
						<p>
							Podras interactuar con el bot en tu canal de twitch usando los comandos y palabras clave que hemos elegido
							para jugar.
						</p>
						<p>¿Serás capaz de ser el primero en los rankings y superar a los demas usuarios?</p>
					</Card>
					<Card title={`Jolines ${getRandomJolin()}`} lottie={porkyHappy}>
						<p>
							¿Te sientes vacio por dentro? No esperes mas, alimenta a nuestro cerdito de los jolines escribiendo
							"jolin" en el chat.
						</p>
						<p>Cuenta tus jolines y los del canal usando los comandos "!jolines" y "!jolines @usuario"!</p>
					</Card>
					<Card title={`Aflores ${getRandomAflor()}`} lottie={aflor}>
						<p>
							¿A quien no le gustan las flores? Dale cariño a tus amigos del chat con el comando "!aflor @usuario" y
							hazlos ganar el ranking de aflores (no incluye flores reales).
						</p>
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

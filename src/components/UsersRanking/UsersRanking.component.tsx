import * as S from './UsersRanking.styles'
import { Loading } from 'components/Loading'
import { RankingList } from 'components/RankingList'
import { RankingListItem, RankingListTop } from 'components/RankingListItem'
import { HomeContextModule } from 'context'
import { useRanking } from 'hooks'
import { FC, Fragment, ReactElement, useCallback, useContext } from 'react'
import { GlobalTypes } from 'types/global.types'
import { RankingTypes } from 'types/ranking.types'
import { filterAflores, filterJolines, sortAflores, sortJolines } from 'utils'

export const UsersRanking: FC = (): ReactElement => {
	const { rankingType } = useContext(HomeContextModule.HomeContext)
	const { ranking: usersRanking, isRankingLoaded } = useRanking('users')

	const renderJolinesRanking = useCallback(() => {
		const filteredUsers = usersRanking.filter(filterJolines) as GlobalTypes.PickRequired<RankingTypes.User, 'jolines'>[]
		const sortedUsers = filteredUsers.sort(sortJolines)
		const topUsers = sortedUsers.slice(0, 3)
		const restUsers = sortedUsers.slice(3, 14)

		const topUsersList = (
			<S.RankingTopContainer key='user-jolines'>
				{topUsers.map((user, index) => (
					<RankingListTop
						key={`user-jolines-${index}`}
						place={index}
						name={user.name}
						count={user.jolines}
						image={user.imageUrl}
					/>
				))}
			</S.RankingTopContainer>
		)

		const restUsersList = restUsers.map((user, index) => (
			<RankingListItem key={`user-jolines-${index + 3}`} place={index + 3} name={user.name} count={user.jolines} />
		))

		return [topUsersList, ...restUsersList]
	}, [usersRanking])

	const renderAfloresRanking = useCallback(() => {
		const filteredUsers = usersRanking.filter(filterAflores) as GlobalTypes.PickRequired<RankingTypes.User, 'aflores'>[]
		const sortedUsers = filteredUsers.sort(sortAflores)
		const topUsers = sortedUsers.slice(0, 3)
		const restUsers = sortedUsers.slice(3, 14)

		const topUsersList = (
			<S.RankingTopContainer key='user-aflores'>
				{topUsers.map((user, index) => (
					<RankingListTop
						key={`user-aflores-${index}`}
						place={index}
						name={user.name}
						count={user.aflores.total}
						image={user.imageUrl}
					/>
				))}
			</S.RankingTopContainer>
		)

		const restUsersList = restUsers.map((user, index) => (
			<RankingListItem
				key={`user-aflores-${index + 3}`}
				place={index + 3}
				name={user.name}
				count={user.aflores.total}
			/>
		))

		return [topUsersList, ...restUsersList]
	}, [usersRanking])

	return (
		<S.UsersRanking>
			<S.RankingHeaderContainer>
				<S.RankingHeader>
					<S.RankingTitle>{rankingType}</S.RankingTitle>
				</S.RankingHeader>
			</S.RankingHeaderContainer>
			<RankingList>
				{isRankingLoaded ? rankingType === 'jolines' ? renderJolinesRanking() : renderAfloresRanking() : <Loading />}
			</RankingList>
		</S.UsersRanking>
	)
}

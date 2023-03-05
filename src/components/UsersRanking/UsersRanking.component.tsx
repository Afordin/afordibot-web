import * as S from './UsersRanking.styles'
import { RankingList } from 'components/RankingList'
import { RankingListItem } from 'components/RankingListItem'
import { HomeContextModule } from 'context'
import { useRanking } from 'hooks'
import { FC, ReactElement, useCallback, useContext } from 'react'
import { GlobalTypes } from 'types/global.types'
import { RankingTypes } from 'types/ranking.types'
import { filterAflores, sortAflores } from 'utils/handleAflores'
import { filterJolines, sortJolines } from 'utils/handleJolines'

export const UsersRanking: FC = (): ReactElement => {
	const { rankingType } = useContext(HomeContextModule.HomeContext)
	const { ranking: usersRanking } = useRanking('users')

	const renderJolinesRanking = useCallback(() => {
		const filteredUsers = usersRanking.filter(filterJolines) as GlobalTypes.PickRequired<RankingTypes.User, 'jolines'>[]
		const sortedUsers = filteredUsers.sort(sortJolines).slice(0, 10)
		return sortedUsers.map((user, index) => (
			<RankingListItem key={index} place={index + 1} name={user.name} count={user.jolines} />
		))
	}, [usersRanking])

	const renderAfloresRanking = useCallback(() => {
		const filteredUsers = usersRanking.filter(filterAflores) as GlobalTypes.PickRequired<RankingTypes.User, 'aflores'>[]
		const sortedUsers = filteredUsers.sort(sortAflores).slice(0, 10)
		return sortedUsers.map((user, index) => (
			<RankingListItem key={index} place={index + 1} name={user.name} count={user.aflores.total} />
		))
	}, [usersRanking])

	return (
		<S.UsersRanking>
			<S.RankingHeaderContainer>
				<S.RankingHeader>
					<S.RankingTitle>{rankingType}</S.RankingTitle>
				</S.RankingHeader>
			</S.RankingHeaderContainer>
			<RankingList>{rankingType === 'jolines' ? renderJolinesRanking() : renderAfloresRanking()}</RankingList>
		</S.UsersRanking>
	)
}

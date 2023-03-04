import * as S from './UsersRanking.styles'
import { RankingList } from 'components/RankingList'
import { RankingListItem } from 'components/RankingListItem'
import { RankingTitle } from 'components/RankingTitle'
import { FirebaseConfig } from 'config/Firebase'
import { HomeContextModule } from 'context'
import { onValue, ref } from 'firebase/database'
import { FC, ReactElement, useCallback, useContext, useEffect, useState } from 'react'
import { FirebaseTypes } from 'types/firebase.types'
import { GlobalTypes } from 'types/global.types'
import { filterAflores, sortAflores } from 'utils/handleAflores'
import { filterJolines, sortJolines } from 'utils/handleJolines'

export interface UserRanking extends FirebaseTypes.User {
	name: string
}

export const UsersRanking: FC = (): ReactElement => {
	const { rankingType } = useContext(HomeContextModule.HomeContext)
	const [usersRanking, setUsersRanking] = useState<UserRanking[]>([])

	const renderJolinesRanking = useCallback(() => {
		const filteredUsers = usersRanking.filter(filterJolines) as GlobalTypes.PickRequired<UserRanking, 'jolines'>[]
		const sortedUsers = filteredUsers.sort(sortJolines).slice(0, 10)
		return sortedUsers.map((user, index) => (
			<RankingListItem key={index} place={index + 1} name={user.name} count={user.jolines} />
		))
	}, [usersRanking])

	const renderAfloresRanking = useCallback(() => {
		const filteredUsers = usersRanking.filter(filterAflores) as GlobalTypes.PickRequired<UserRanking, 'aflores'>[]
		const sortedUsers = filteredUsers.sort(sortAflores).slice(0, 10)
		return sortedUsers.map((user, index) => (
			<RankingListItem key={index} place={index + 1} name={user.name} count={user.aflores.total} />
		))
	}, [usersRanking])

	useEffect(() => {
		const usersRankingRef = ref(FirebaseConfig.database, 'users')
		onValue(usersRankingRef, (snapshot) => {
			const data = snapshot.val() as FirebaseTypes.Users
			const users = Object.entries(data).map(([key, value]) => ({ name: key, ...value }))
			setUsersRanking(users)
		})
	}, [])

	return (
		<S.UsersRanking>
			<S.RankingHeaderContainer>
				<S.RankingHeader>
					<RankingTitle title={rankingType} />
				</S.RankingHeader>
			</S.RankingHeaderContainer>
			<RankingList>{rankingType === 'jolines' ? renderJolinesRanking() : renderAfloresRanking()}</RankingList>
		</S.UsersRanking>
	)
}

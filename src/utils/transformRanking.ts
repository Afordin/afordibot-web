import { SubRankingUser } from 'components/SubRanking'
import { HomeContextModule } from 'context'
import { GlobalTypes } from 'types/global.types'
import { RankingTypes } from 'types/ranking.types'

type Ranking = RankingTypes.User[]
type RankingType = HomeContextModule.RankingType
type RankingRequired = GlobalTypes.PickRequired<RankingTypes.User, RankingType>[]
type RankingUser = RankingRequired[number]

const sortUsers = (rankingType: RankingType) => (a: RankingUser, b: RankingUser) =>
	rankingType === 'jolines' ? b.jolines - a.jolines : b.aflores.total - a.aflores.total

const mapUsers = (rankingType: RankingType) => (user: RankingUser) => ({
	name: user.name,
	value: rankingType === 'jolines' ? user.jolines : user.aflores.total,
})

export const transformRanking = (rankingType: RankingType) => (ranking: Ranking): SubRankingUser[] => {
	const filteredUsers = ranking.filter((user) => user[rankingType] !== undefined) as RankingRequired
	const sortedUsers = filteredUsers.sort(sortUsers(rankingType))
	const cutUsers = sortedUsers.slice(0, 3)
	return cutUsers.map(mapUsers(rankingType))
}

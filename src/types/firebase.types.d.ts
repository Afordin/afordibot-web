import { AfloresTypes } from 'types/aflores.types'
import { JolinesTypes } from 'types/jolines.types'

export namespace FirebaseTypes {
	export type DatabaseRef = 'users' | 'channels' | 'weekly' | 'monthly' | 'channels-users'

	export type User = JolinesTypes.JolinesUser & AfloresTypes.AfloresUser

	export interface UserRanking {
		[key: string]: User
	}

	export interface ChannelRanking {
		[key: string]: UserRanking
	}
}

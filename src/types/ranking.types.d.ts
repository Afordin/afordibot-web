import { FirebaseTypes } from './firebase.types'

export namespace RankingTypes {
	export interface User extends FirebaseTypes.User {
		name: string
	}
}

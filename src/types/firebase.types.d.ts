export namespace FirebaseTypes {
	import { AfloresTypes } from './aflores.types'
	import { JolinesTypes } from './jolines.types'

	export type User = JolinesTypes.JolinesUser & AfloresTypes.AfloresUser

	export interface Users {
		[key: string]: User
	}
}

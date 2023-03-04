import { AfloresTypes } from 'types/aflores.types'
import { JolinesTypes } from 'types/jolines.types'

export namespace FirebaseTypes {
	export type User = JolinesTypes.JolinesUser & AfloresTypes.AfloresUser

	export interface Users {
		[key: string]: User
	}
}

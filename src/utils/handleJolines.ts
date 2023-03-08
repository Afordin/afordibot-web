import { FirebaseTypes } from 'types/firebase.types'
import { GlobalTypes } from 'types/global.types'

type UserJolines = GlobalTypes.PickRequired<FirebaseTypes.User, 'jolines'>

export const filterJolines = (user: FirebaseTypes.User) => user.jolines !== undefined

export const sortJolines = (a: UserJolines, b: UserJolines) => b.jolines - a.jolines

export const getRandomJolin = () => {
	const jolin = ['🐷', '🐽', '🐖']
	return jolin[Math.floor(Math.random() * jolin.length)]
}

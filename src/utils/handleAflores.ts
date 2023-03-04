import { FirebaseTypes } from 'types/firebase.types'
import { GlobalTypes } from 'types/global.types'

type UserAflores = GlobalTypes.PickRequired<FirebaseTypes.User, 'aflores'>

export const filterAflores = (user: FirebaseTypes.User) => user.aflores !== undefined

export const sortAflores = (a: UserAflores, b: UserAflores) => b.aflores.total - a.aflores.total

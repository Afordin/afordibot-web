import { FirebaseConfig } from 'config/Firebase'
import { onValue, ref } from 'firebase/database'
import { useCallback, useEffect, useState } from 'react'
import { FirebaseTypes } from 'types/firebase.types'
import { RankingTypes } from 'types/ranking.types'

export interface UseRanking {
	ranking: RankingTypes.User[]
}

export const useRanking = (dbRef: FirebaseTypes.DatabaseRef): UseRanking => {
	const [ranking, setRanking] = useState<RankingTypes.User[]>([])

	const getRanking = useCallback(() => {
		const usersRankingRef = ref(FirebaseConfig.database, dbRef)
		const unsubscribe = onValue(usersRankingRef, (snapshot) => {
			const data = snapshot.val() as FirebaseTypes.UserRanking
			const users = Object.entries(data).map(([key, value]) => ({ name: key, ...value }))
			setRanking(users)
		})

		return () => {
			unsubscribe()
		}
	}, [dbRef])

	useEffect(getRanking, [])

	return { ranking }
}

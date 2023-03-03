import { Dispatch, SetStateAction, createContext } from 'react'

export module HomeContextModule {
	export type RankingType = 'jolines' | 'aflores'

	export interface HomeContextState {
		rankingType: RankingType
		setRankingType: Dispatch<SetStateAction<RankingType>>
	}

	export const HomeContext = createContext<HomeContextState>({
		rankingType: 'jolines',
		setRankingType: () => {},
	})
}

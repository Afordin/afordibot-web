import * as S from './RankingToggleButton.styles'
import { HomeContextModule } from 'context'
import { FC, ReactElement, useCallback, useContext, useMemo } from 'react'
import { getRandomAflor, getRandomJolin } from 'utils'

export const RankingToggleButton: FC = (): ReactElement => {
	const { rankingType, setRankingType } = useContext(HomeContextModule.HomeContext)

	const isActive = useMemo(() => rankingType === 'jolines', [rankingType])
	const circleIcon = useMemo(() => (isActive ? getRandomJolin() : getRandomAflor()), [isActive])

	const toggleRankingType = useCallback(() => {
		setRankingType((prev) => (prev === 'jolines' ? 'aflores' : 'jolines'))
	}, [setRankingType])

	return (
		<S.RankingToggleButton active={isActive} onClick={toggleRankingType}>
			<S.RankingToggleCircle>{circleIcon}</S.RankingToggleCircle>
		</S.RankingToggleButton>
	)
}

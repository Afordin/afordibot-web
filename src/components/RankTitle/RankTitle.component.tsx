import { FC, ReactElement } from 'react'
import * as S from './RankTitle.styles'

interface RankTitleProps {
	titleName: string
}

export const RankTitle: FC<RankTitleProps> = ({ titleName }): ReactElement => {
	return (
		<S.RankTitleContainer>
			<S.RankTitle>{titleName}</S.RankTitle>
		</S.RankTitleContainer>
	)
}

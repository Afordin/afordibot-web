import * as S from './RankingTitle.styles'
import { FC, ReactElement } from 'react'

interface RankingTitleProps {
	title: string
}

export const RankingTitle: FC<RankingTitleProps> = ({ title }): ReactElement => {
	return <S.RankingTitle>{title}</S.RankingTitle>
}

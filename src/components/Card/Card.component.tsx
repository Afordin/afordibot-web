import * as S from './Card.styles'
import { FC, ReactElement } from 'react'
import { Separator } from 'styles'

export interface CardImageProps {
	title: string
	desc: string
	image?: string
	imageAlt?: string
}

export const Card: FC<CardImageProps> = ({ title, desc, image, imageAlt }): ReactElement => {
	return (
		<S.Card>
			<S.CardTitle>{title}</S.CardTitle>
			<Separator size='small' />
			<S.CardContainer>
				{image && <S.CardImg src={image} alt={imageAlt} />}
				<S.CardDesc>{desc}</S.CardDesc>
			</S.CardContainer>
		</S.Card>
	)
}

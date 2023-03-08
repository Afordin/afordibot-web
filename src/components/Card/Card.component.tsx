import * as S from './Card.styles'
import { FC, ReactElement } from 'react'
import { Separator } from 'styles'

export interface CardProps {
	title: string
	children: string | ReactElement | ReactElement[]
	// rome-ignore lint/suspicious/noExplicitAny: it's a lottie animation difficult to type correctly
	lottie?: any
}

export const Card: FC<CardProps> = ({ title, children, lottie }): ReactElement => {
	return (
		<S.Card>
			<S.CardTitle>{title}</S.CardTitle>
			<Separator size='small' />
			<S.CardContent>
				{lottie && (
					<S.CardContentSection>
						<S.CardLottie animationData={lottie} />
					</S.CardContentSection>
				)}
				<S.CardContentSection fullWidth={!lottie}>{children}</S.CardContentSection>
			</S.CardContent>
		</S.Card>
	)
}

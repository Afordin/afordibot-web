import { FirefliesAnimation } from './Fireflies.animation'
import * as S from './Fireflies.styles'
import { FC, ReactElement } from 'react'

const fireflies = new Array(80).fill(null)

export const Fireflies: FC = (): ReactElement => {
	return (
		<S.Fireflies>
			{fireflies.map((_, index) => {
				const top = FirefliesAnimation.getRandomNumberInclusive(0, window.innerHeight)
				const values = {
					top,
					left: FirefliesAnimation.getRandomNumberInclusive(0, window.innerWidth),
					opacity: FirefliesAnimation.getRandomNumberInclusive(0.3, 1),
					blur: FirefliesAnimation.getRandomNumberInclusive(5, 15),
					spread: FirefliesAnimation.getRandomNumberInclusive(1, 1),
					scale: FirefliesAnimation.getRandomNumberInclusive(0, 1),
					animation: FirefliesAnimation.chooseAnimation(top),
					duration: FirefliesAnimation.getRandomNumberInclusive(30, 50),
					delay: FirefliesAnimation.getRandomNumberInclusive(0, 3),
				}
				return <S.Firefly key={index} {...values} />
			})}
		</S.Fireflies>
	)
}

import { FirefliesAnimation } from './Fireflies.animation'
import * as S from './Fireflies.styles'
import { FC, ReactElement } from 'react'
import { getRandomNumberInclusive } from 'utils'

const fireflies = new Array(80).fill(null)

export const Fireflies: FC = (): ReactElement => {
	return (
		<S.Fireflies>
			{fireflies.map((_, index) => {
				const top = getRandomNumberInclusive(0, window.innerHeight)
				const values = {
					top,
					left: getRandomNumberInclusive(0, window.innerWidth),
					opacity: getRandomNumberInclusive(0.3, 1),
					blur: getRandomNumberInclusive(5, 15),
					spread: getRandomNumberInclusive(1, 1),
					scale: getRandomNumberInclusive(0, 1),
					animation: FirefliesAnimation.chooseAnimation(top),
					duration: getRandomNumberInclusive(30, 50),
					delay: getRandomNumberInclusive(0, 3),
				}
				return <S.Firefly key={index} {...values} />
			})}
		</S.Fireflies>
	)
}

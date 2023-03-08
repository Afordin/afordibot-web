import * as S from './Rain.styles'
import { FC, ReactElement } from 'react'
import { getRandomNumberInclusive } from 'utils'

const rain = new Array(40).fill(null)

export const Rain: FC = (): ReactElement => {
	return (
		<S.RainCont>
			{rain.map((_, index) => {
				const values = {
					delay: getRandomNumberInclusive(1, 2),
					duration: getRandomNumberInclusive(0.5, 1.5),
					left: getRandomNumberInclusive(0, window.innerWidth),
					size: getRandomNumberInclusive(20, 50),
				}
				return <S.Rain key={index} {...values} />
			})}
		</S.RainCont>
	)
}

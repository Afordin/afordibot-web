import { RainAnimation } from './Rain.animation'
import { FC, ReactElement } from 'react'
import * as S from './Rain.styles'

const rain = new Array(80).fill(null)

export const Rain: FC = (): ReactElement => {
	return (
		<S.RainCont>
			{rain.map((_, index) => {
				const values = {
					delay: RainAnimation.FallTime(),
					duration: RainAnimation.FallTime(),
					left: RainAnimation.RainPosition(),
				}
				return <S.Rain key={index} {...values} />
			})}
		</S.RainCont>
	)
}

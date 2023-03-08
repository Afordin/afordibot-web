import * as S from './Footer.styles'
import { FC, ReactElement } from 'react'

export const Footer: FC = (): ReactElement => {
	return (
		<S.Footer>
			<S.TitleFooter>AfordiBot.</S.TitleFooter>
			<S.DevsFooter>2023 AfordiBot. Developed with 💜 by @_snowdrive_ - @utopie_ - @bulbsum</S.DevsFooter>
		</S.Footer>
	)
}

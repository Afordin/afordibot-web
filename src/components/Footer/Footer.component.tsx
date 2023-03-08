import { FC, ReactElement } from 'react'
import * as S from './Footer.styles'

export const Footer: FC = (): ReactElement => {
	return (
		<S.Footer>
			<S.TitleFooter>Afordibot.</S.TitleFooter>
			<S.DevsFooter>
				2023 Afordibot. Developed with 💜 by @_snowdrive_ - @utopie_ - @bulbsum
			</S.DevsFooter>
		</S.Footer>
	)
}

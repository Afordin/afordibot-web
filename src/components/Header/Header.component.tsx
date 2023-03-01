import * as S from './Header.styles'
import { FC, ReactElement } from 'react'

export const Header: FC = (): ReactElement => {
	return (
		<S.Header>
			<S.Title>Afordibot</S.Title>
		</S.Header>
	)
}

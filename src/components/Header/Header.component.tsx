import { FC, ReactElement } from 'react'
import * as S from './Header.styles'

const Title: FC = (): ReactElement => {
	return (
		<S.Header>
			<S.Title>Afordibot</S.Title>
		</S.Header>
	)
}

export default Title

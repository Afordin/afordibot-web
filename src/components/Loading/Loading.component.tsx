import { FC, ReactElement } from 'react'
import * as S from './Loading.styles'

export const Loading: FC = (): ReactElement => {
	return (
		<S.Container>
			<S.Loading />
			<S.invLoading />
		</S.Container>
	)
}

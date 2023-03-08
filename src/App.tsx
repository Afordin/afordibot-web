import { Home } from './pages/Home'
import { Fireflies } from 'components/Fireflies'
import { FC, Fragment, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Rain } from 'components/Rain'

export const App: FC = (): ReactElement => {
	return (
		<Fragment>
			{Math.random() > 0.5 ? <Fireflies /> : <Rain />}
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Fragment>
	)
}

import { FC, Fragment, ReactElement } from 'react'
import { Routes } from 'react-router-dom'

export const App: FC = (): ReactElement => {
	return (
		<Fragment>
			<Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
		</Fragment>
	)
}

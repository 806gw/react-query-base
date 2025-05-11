import * as R from './allFiles'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Routes>
				<Route path={'/'} element={<R.Main />}></Route>
				<Route path={'/signup'} element={<R.SignUp />} />
				<Route path={'/signin'} element={<R.SignIn />} />
				<Route path={'/profile'} element={<R.Profile />} />
			</Routes>
		</Router>
	)
}

export default App

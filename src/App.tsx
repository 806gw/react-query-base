import * as R from "./allFiles"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
 return (
		<Router>
			<Routes>
				<Route path={"/"} element={<R.SignUp />} />
			</Routes>
		</Router>
 )
}

export default App

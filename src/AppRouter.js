import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const AppRouter = () => (
	<Router>
		<Route exact path={'/'} component={Home} />
	</Router>
)

export default AppRouter
// Routes

import React from './node_modules/react';
import { Route } from './node_modules/react-router-dom';
import { CSSTransition } from './node_modules/react-transition-group';

import Copyright from '../layout/Copyright/Copyright';
import Dashboard from '../pages/Dashboard/Dashboard';
import Temperature from '../components/Sensors/Temperature/Temperature';
import Humidity from '../components/Sensors/Humidity/Humidity';
import Signup from '../Auth/SignUp';
import Signin from '../Auth/SignIn';
import Signout from '../Auth/SignOut';

// Custom styles
import useStyles from './style.js';

const routes = [
	{ path: '/', name: 'Dashboard', Component: Dashboard },
	{ path: '/temperature', name: 'Temperature', Component: Temperature },
	{ path: '/humidity', name: 'Humidity', Component: Humidity },
	{ path: '/signin', name: 'Login', Component: Signin },
	{ path: '/signup', name: 'Signup', Component: Signup },
	{ path: '/signout', name: 'Logout', Component: Signout }
];

const Routes = () => {
	const classes = useStyles();
	return routes.map(({ path, Component }) => (
		<Route key={path} exact path={path}>
			{({ match }) => (
				<CSSTransition
					in={match != null}
					timeout={300}
					unmountOnExit
					classNames={{
						enter: classes.pageEnter,
						enterActive: classes.pageEnterActive,
						exit: classes.pageExit,
						exitActive: classes.pageExitActive
					}}
				>
					<div className={classes.page}>
						<Component />
						<Copyright />
					</div>
				</CSSTransition>
			)}
		</Route>
	));
};

export default Routes;
// @flow
import React, { Component } from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
import { Route } from 'react-router';
import routes from '../constants/routes.json';
import styles from './Home.css';
import Courses from './Courses';
import Downloading from './Downloading';
import Settings from './Settings';

type Props = {};

export default class Home extends Component<Props> {
	props: Props;

	render() {
		return (
			<HashRouter>
				<div className={styles.home} data-tid="container">
					<nav>
						<NavLink
							key={0}
							activeClassName="active"
							to={routes.COURSES}
						>
							<div className={styles.nav_button}>
								<i className="fas fa-book-reader fa-2x fa-fw" />
								<br />
								Courses
							</div>
						</NavLink>
						<NavLink
							key={1}
							activeClassName="active"
							to={routes.DOWNLOADING}
						>
							<div className={styles.nav_button}>
								<i className="fas fa-cloud-download-alt fa-2x fa-fw" />
								<br />
								Downloading
							</div>
						</NavLink>
						<NavLink
							key={2}
							activeClassName="active"
							to={routes.SETTINGS}
						>
							<div className={styles.nav_button}>
								<i className="fas fa-cogs fa-2x fa-fw" />
								<br />
								Settings
							</div>
						</NavLink>
					</nav>
					<div className={styles.content}>
						<Route path={routes.COURSES} component={Courses} />
						<Route
							path={routes.DOWNLOADING}
							component={Downloading}
						/>
						<Route path={routes.SETTINGS} component={Settings} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

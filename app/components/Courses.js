import React, { Component } from 'react';
import InputSearch from './UI/InputSearch';
import NavBar from './UI/navbar/NavBar';

class Courses extends Component {
	render() {
		return (
			<div>
				<InputSearch />
				<NavBar />
			</div>
		);
	}
}

export default Courses;

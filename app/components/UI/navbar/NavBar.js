import React, { Component } from 'react';
import style from './NavBar.css';

const MenuItems = [
	{ label: 'Recent', key: 1 },
	{ label: 'Favourite', key: 2 },
	{ label: 'Downloaded', key: 3 },
	{ label: 'On-line', key: 4 }
];
class NavBar extends Component {
	constructor() {
		super();
		this.state = {
			activeMenu: MenuItems[0]
		};
	}

	handleClick = menuItem => {
		this.setState({
			activeMenu: menuItem
		});
		console.log(menuItem);
	};

	render() {
		const { activeMenu } = this.state;
		const menuItems = MenuItems.map(el => (
			<li key={el.key} className={style.navbar_item}>
				<a
					className={activeMenu === el ? `${style.active}` : ``}
					onClick={() => this.handleClick(el)}
				>
					{el.label}
				</a>
			</li>
		));
		return <ul className={style.navbar}>{menuItems}</ul>;
	}
}

export default NavBar;

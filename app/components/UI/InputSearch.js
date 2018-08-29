import React from 'react';
import style from './InputSearch.css';

const InputSearch = () => {
	return (
		<div className={style.search}>
			<input
				type="text"
				className={style.searchTerm}
				placeholder="What are you looking for?"
			/>
			<div className={style.icon}>
				<i className="fas fa-fw fa-search" />
			</div>
		</div>
	);
};
export default InputSearch;

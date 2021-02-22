import React from 'react';
import { useForm } from '../../hook/useForm';
import { fetchSearch } from '../../helpers/fetch';

export const NavBar = () => {
	const [formValues, handleInputChange] = useForm();

	const { search } = formValues;

	const handleSearch = (e) => {
		e.preventDefault();
		fetchSearch(search).then((res) => console.log(res));
	};

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
				<div className="navbar-brand">MDB Frontend</div>
				<form className="d-flex">
					<input
						className="form-control me-2"
						name="search"
						type="text"
						value={search}
						placeholder="Search"
						onChange={handleInputChange}
					/>
					<button
						className="btn btn-success"
						type="submit"
						onClick={handleSearch}
					>
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};

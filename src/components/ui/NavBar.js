import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hook/useForm';
import { startGetSearchTitle } from '../../actions/moviesAction';

export const NavBar = () => {
	const [formValues, handleInputChange] = useForm();
	const dispatch = useDispatch();

	const { search } = formValues;

	// TODO: validar campo vacio
	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(startGetSearchTitle(search));
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

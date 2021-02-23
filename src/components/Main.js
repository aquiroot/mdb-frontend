import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { NavBar } from './ui/NavBar';
import { Dashboard } from './ui/Dashboard';

export const Main = () => {
	return (
		<Provider store={store}>
			<NavBar />
			<Dashboard />
		</Provider>
	);
};

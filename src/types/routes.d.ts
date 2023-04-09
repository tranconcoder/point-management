import type { ReactNode } from 'react';

export interface Route<T = any> {
	title: string;
	icon: ReactNode;
	path: string;
	element: ReactNode;
	child?: T;
}

export interface RoutesMap {
	homePage: Route;
	authPage: Route<{
		loginPage: Route;
		registerPage: Route;
	}>;
}

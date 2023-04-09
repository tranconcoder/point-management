import type { Route, RoutesMap } from '../types/routes';

export const routesMapToArray = (map: RoutesMap) => {
	const arrayConverted: Array<Route> = [];

	handlePushRoute(map);

	function handlePushRoute(map: RoutesMap, currentPath = '') {
		Object.entries(map).forEach(([key, route]: [string, Route]) => {
			const { child, ...dataToPush } = route;

			// Get full path to access (path to full path)
			const fullPath = `${currentPath}/${dataToPush.path}`;

			dataToPush.path = fullPath;

			arrayConverted.push(dataToPush);

			if (child) handlePushRoute(child, fullPath);
		});
	}

	console.log(arrayConverted);
	return arrayConverted;
};

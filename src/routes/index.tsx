import type { RoutesMap } from '../types/routes';

import { BiHome, BiLogInCircle } from 'react-icons/bi';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import { routesMapToArray } from '../utils/routes.util';
import { AiOutlineUserAdd } from 'react-icons/ai';

const routesMap: RoutesMap = {
	homePage: {
		title: 'Trang chủ',
		icon: <BiHome />,
		path: '',
		element: <HomePage />,
	},
	authPage: {
		title: 'Auth',
		icon: <BiLogInCircle />,
		path: 'auth',
		element: <HomePage />,
		child: {
			loginPage: {
				title: 'Đăng nhập',
				icon: <BiLogInCircle />,
				path: 'login',
				element: <HomePage />,
			},
			registerPage: {
				title: 'Đăng ký',
				icon: <AiOutlineUserAdd />,
				path: 'register',
				element: <HomePage />,
			},
		},
	},
};
const routesArray = routesMapToArray(routesMap);
const browserRouter = createBrowserRouter(routesArray);

export { routesMap, routesArray };
export default browserRouter;

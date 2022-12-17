import { RouterProvider } from 'react-router-dom';
import browserRouter from './routes';

export default function App() {
	return <RouterProvider router={browserRouter} />;
}

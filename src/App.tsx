import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import browserRouter from "./routes";

styled.li`
	color: #000000;
	background-color: rgb(138, 255, 116);
`;

export default function App() {
	return <RouterProvider router={browserRouter} />;
}

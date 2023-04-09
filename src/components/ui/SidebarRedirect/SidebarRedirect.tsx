import { useLocation } from "react-router-dom";
import { routesArray } from "../../../routes";
import { Route } from "../../../types/routes";
import {
	RedirectContainer,
	RedirectItem,
	RedirectList,
	SidebarRedirectContainer,
} from "./styles";

export default function SidebarRedirect() {
	const redirectLinkList: Array<string> = [
		"/",
		"/auth",
		"/auth/login",
		"/auth/register",
	];
	const redirectLinkInfoList: Array<Route> = routesArray.filter(({ path }) =>
		redirectLinkList.includes(path)
	);
	const location = useLocation();

	return (
		<SidebarRedirectContainer>
			<RedirectContainer>
				<RedirectList>
					{redirectLinkInfoList.map(({ icon, title, path }) => (
						<RedirectItem
							key={path}
							active={+(path === location.pathname) as any}
							to={path}
						>
							{icon}
							{title}
						</RedirectItem>
					))}
				</RedirectList>
			</RedirectContainer>
		</SidebarRedirectContainer>
	);
}

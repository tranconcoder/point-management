import SidebarRedirect from '../../ui/SidebarRedirect';
import SidebarSearch from '../../ui/SidebarSearch';
import { Header, SidebarWrapper } from './styles';

export default function Sidebar() {
	return (
		<SidebarWrapper>
			<Header>Point Management</Header>

			<SidebarSearch />
			<SidebarRedirect />
		</SidebarWrapper>
	);
}

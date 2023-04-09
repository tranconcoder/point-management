import { ReactElement } from 'react';
import styled from 'styled-components';

const MainLayoutContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: stretch;
`;
const Sidebar = styled.aside`
	flex: 2;
	overflow-y: auto;
`;
const MainContent = styled.section`
	flex: 5;
	overflow-y: auto;
`;

export default function MainLayout({
	sidebarContentElm,
	mainContentElm,
}: {
	sidebarContentElm: ReactElement;
	mainContentElm: ReactElement;
}) {
	return (
		<MainLayoutContainer>
			<Sidebar>{sidebarContentElm}</Sidebar>

			<MainContent>{mainContentElm}</MainContent>
		</MainLayoutContainer>
	);
}

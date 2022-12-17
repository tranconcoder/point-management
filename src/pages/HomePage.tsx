import Sidebar from '../components/common/Sidebar/Sidebar';
import MainLayout from '../components/layouts/MainLayout';
import HomePageContent from '../components/ui/HomePageContent';
export default function HomePage() {
	return (
		<MainLayout
			sidebarContentElm={<Sidebar />}
			mainContentElm={<HomePageContent />}
		/>
	);
}

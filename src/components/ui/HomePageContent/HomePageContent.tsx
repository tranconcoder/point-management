import avatar from '../../../assets/images/avatar.jpg';
import { Avatar, AvatarContainer, InfoContainer, Wrapper } from './styles';

export default function HomePageContent() {
	return (
		<Wrapper>
			<InfoContainer>
				<AvatarContainer>
					<Avatar src={avatar} />
				</AvatarContainer>
			</InfoContainer>
		</Wrapper>
	);
}

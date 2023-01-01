import HomePageAvatar from "../HomePageAvatar";
import {
	FormInfoContainer,
	InfoContainer,
	PersonalInfoTitle,
	Wrapper,
} from "./styles";

export default function HomePageContent() {
	return (
		<Wrapper>
			<InfoContainer>
				<HomePageAvatar />
			</InfoContainer>

			<FormInfoContainer>
				<PersonalInfoTitle>#Thông tin cá nhân</PersonalInfoTitle>
			</FormInfoContainer>
		</Wrapper>
	);
}

import {
	Avatar,
	AvatarContainer,
	ButtonContainer,
	ChangeAvatarButton,
} from "./styles";
import avatar from "../../../assets/images/avatar.jpg";
import { useState } from "react";

export default function HomePageAvatar() {
	const [avatarApplied, setAvatarApplied] = useState(avatar);
	const [avatarView, setAvatarView] = useState(avatarApplied);

	return (
		<AvatarContainer>
			<Avatar src={avatarView} />

			<ButtonContainer>
				<ChangeAvatarButton color="red">
					Thay đổi ảnh
				</ChangeAvatarButton>
			</ButtonContainer>
		</AvatarContainer>
	);
}

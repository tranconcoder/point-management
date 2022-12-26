import {
	Avatar,
	AvatarContainer,
	AvatarInput,
	ButtonContainer,
	ChangeAvatarButton,
	ResetAvatarButton,
} from "./styles";
import avatar from "../../../assets/images/avatar.jpg";
import { useState } from "react";

export default function HomePageAvatar() {
	const [avatarApplied, setAvatarApplied] = useState(avatar);
	const [avatarView, setAvatarView] = useState(avatarApplied);

	const handleChangeAvatar = (e: any) => {
		const fileImage = e.target.files[0] as File;
		const imageLink = URL.createObjectURL(fileImage);

		setAvatarView(imageLink);
	};

	return (
		<AvatarContainer>
			<Avatar src={avatarView} />

			<ButtonContainer>
				<ChangeAvatarButton as="label">
					<p>Thay đổi ảnh</p>

					<AvatarInput onChange={handleChangeAvatar} />
				</ChangeAvatarButton>

				<ResetAvatarButton></ResetAvatarButton>
			</ButtonContainer>
		</AvatarContainer>
	);
}

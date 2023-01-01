import {
	Avatar,
	AvatarContainer,
	AvatarInput,
	ButtonContainer,
	ChangeAvatarButton,
	ResetAvatarButton,
	SaveAvatarButton,
} from "./styles";
import avatar from "../../../assets/images/avatar.jpg";
import { Fragment, useState } from "react";

export default function HomePageAvatar() {
	const [avatarApplied, setAvatarApplied] = useState(avatar);
	const [avatarView, setAvatarView] = useState(avatarApplied);
	const isChanged = avatarApplied !== avatarView;

	const handleChangeAvatar = (e: any) => {
		const fileImage = e.target.files[0] as File;
		const imageLink = URL.createObjectURL(fileImage);

		setAvatarView(imageLink);

		if (avatarView !== avatarApplied) {
			URL.revokeObjectURL(avatarView);
		}
	};
	const handleResetAvatar = () => {
		setAvatarView(avatarApplied);

		URL.revokeObjectURL(avatarView);
	};
	const handleApplyAvatar = () => {
		setAvatarApplied(avatarView);

		URL.revokeObjectURL(avatarApplied);
	};

	return (
		<AvatarContainer>
			<Avatar src={avatarView} />

			<ButtonContainer>
				<ChangeAvatarButton as="label">
					<p>Thay đổi ảnh</p>

					<AvatarInput
					{...(avatarApplied === avatarView ? { value: "" } : {})}
						accept="image/*"
						onChange={handleChangeAvatar}
					/>
				</ChangeAvatarButton>

				{isChanged && (
					<Fragment>
						<ResetAvatarButton onClick={handleResetAvatar}>
							<p>Đặt lại</p>
						</ResetAvatarButton>

						<SaveAvatarButton onClick={handleApplyAvatar}>
							Lưu ảnh
						</SaveAvatarButton>
					</Fragment>
				)}
			</ButtonContainer>
		</AvatarContainer>
	);
}

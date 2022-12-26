import type { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { mixins } from "../../../assets/styledComponents";

export const AvatarContainer = styled.div`
	${mixins.flex("column", "center")}
`;

export const Avatar = styled.img`
	${mixins.size("10rem")}
	object-fit: cover;
	object-position: center;
	border-radius: 50%;
	padding: 0.2rem;
	background-color: white;
	border: 0.2rem solid var(--primary-color);
`;

export const ButtonContainer = styled.div`
	${mixins.flex("row", "center", "center", false, ["1rem"])}
	margin-top: 1rem;
`;

export const AvatarInput = styled.input.attrs({ type: "file", hidden: true })`
	display: none;
`;

interface ButtonProps {
	color?: string;
}

export const Button = styled.button<ButtonProps>`
	--color: rgb(237, 237, 237);
	--hover-color: ${(props) => props.color || "var(--primary-color)"};

	${mixins.text("#555555", "1.4rem", "500")}

	display: block;
	border-radius: 0.8rem;
	border: 0.15rem solid var(--color);
	background-color: var(--color);
	padding: 0.25rem 2rem;
	transition: all ease 300ms;

	&:hover {
		${mixins.text("var(--white-color)")}
		background-color: var(--hover-color);
		border-color: var(--hover-color);
	}
`;

export const ChangeAvatarButton = styled(Button).attrs({
	color: "var(--primary-color)",
})``;

export const ResetAvatarButton = styled(Button).attrs({
	color: "#FFC700",
});

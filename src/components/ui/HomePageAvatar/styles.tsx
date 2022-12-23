import type { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { mixins } from "../../../assets/styledComponents";

function Button({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return <button className={className}>{children}</button>;
}

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
	margin-top: 1rem;
`;

interface ButtonProps {
	color: string;
}
export const ChangeAvatarButton = styled(Button)<ButtonProps>`
	--color: rgb(242, 242, 242);
	--hover-color: ${(props) => props.color || "var(--primary-color)"};

	${mixins.text("#555555", "1.3rem", "500", null, "1.6rem")}

	border-radius: 0.8rem;
	border: 0.15rem solid var(--color);
	background-color: var(--color);
	padding: 0.3rem 2rem;
`;

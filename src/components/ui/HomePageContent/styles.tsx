import styled from "styled-components";
import { mixins } from "../../../assets/styledComponents";

export const Wrapper = styled.div`
	${mixins.size("100%")}
	padding: 1rem;
`;
export const InfoContainer = styled.div`
	${mixins.size("100%", null)}

	padding-block: 5rem 3rem;
	border-radius: 5rem 1rem 5rem 1rem;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.15);
`;

export const FormInfoContainer = styled.form`
`;

export const PersonalInfoTitle = styled.h3`

`

import { AiFillCloseCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import styled, { css } from 'styled-components';
import { mixins } from '../../../assets/styledComponents';

export const InputPanelContainer = styled.div`
	${mixins.flex('row', 'stretch')}
	gap: 0.5rem;
`;
export const InputWrapper = styled.div`
	position: relative;
	flex: 1;
	flex-shrink: 0;
`;
export const Input = styled.input`
	${mixins.size('100%', '4rem')}
	border-radius: 0.8rem;
	border: none;
	outline: none;
	box-shadow: 0 0 0 0.15rem #ccc;
	padding-inline: 1rem 4rem;
	font-size: 1.4rem;
	transition: all ease 300ms;

	&:focus {
		box-shadow: 0 0 0 0.15rem var(--primary-color);
	}
`;
export const ClearInputButtonWrapper = styled.div`
	${mixins.size('4rem')}
	${mixins.position('absolute', '0', '0')}
	display: flex;
	flex-shrink: 0;

	&:hover {
		cursor: pointer;

		.icon {
			opacity: 0;
		}

		.icon-active {
			opacity: 1;
		}
	}
`;
export const clearInputButtonCss = css`
	${mixins.size('100%')}
	position: absolute;
	padding: 1.1rem;
	transition: all ease 300ms;
	color: #777;
`;
export const ClearInputButton = styled(AiOutlineCloseCircle)`
	${clearInputButtonCss}
`;
export const ClearInputButtonHover = styled(AiFillCloseCircle)`
	${clearInputButtonCss}
	opacity: 0;
`;
export const SubmitButton = styled.div.attrs({ children: <BiSearchAlt /> })`
	--color: var(--primary-color);

	${mixins.size('4rem')}
	${mixins.flex('row', 'center', 'center')}

	padding: 1rem;
	border-radius: 0.8rem;
	background-color: var(--color);
	border: 0.2rem solid var(--color);
	transition: all ease 300ms;

	&:hover {
		cursor: pointer;
		background-color: var(--white-color);
		user-select: none;

		svg {
			color: var(--color);
		}
	}

	svg {
		color: #fff;
		font-size: 1.6rem;
	}
`;

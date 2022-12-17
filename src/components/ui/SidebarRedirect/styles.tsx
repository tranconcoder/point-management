import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mixins } from '../../../assets/styledComponents';

interface RedirectItemProps {
	active: boolean;
}

export const SidebarRedirectContainer = styled.nav`
	margin-top: 2rem;
`;
export const RedirectContainer = styled.div``;
export const RedirectList = styled.ul`
	${mixins.flex('column', 'stretch')}
	list-style: none;
	gap: 1rem;
`;
export const RedirectItem = styled(Link)<RedirectItemProps>`
	${mixins.size('100%', '4.5rem')}
	${(props) =>
		mixins.text(
			props.active ? 'var(--white-color)' : "'#777'",
			'1.4rem',
			'500'
		)}
	${mixins.flex('row', 'center')}

	gap: 1rem;
	text-decoration: none;
	border-radius: 1rem;
	transition: all ease 150ms;
	padding-left: 3rem;
	background-color: ${(props) =>
		props.active ? 'var(--primary-color)' : '#f1f1f1'};

	&:hover {
		cursor: pointer;
		color: var(--white-color);
		background-color: var(--primary-color);
	}
`;

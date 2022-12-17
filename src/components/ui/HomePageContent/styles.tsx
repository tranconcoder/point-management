import styled from 'styled-components';
import { mixins } from '../../../assets/styledComponents';

export const Wrapper = styled.div`
	${mixins.size('100%')}
	padding: 1rem;
`;
export const InfoContainer = styled.div`
	${mixins.size('100%', null)}
`;
export const AvatarContainer = styled.div``;
export const Avatar = styled.img.attrs({})`
	${mixins.size('10rem')}
	border-radius: 50%;
	object-fit: cover;
	object-position: center;
`;

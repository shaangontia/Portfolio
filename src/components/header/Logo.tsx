import styled from 'styled-components';
import Img from '../../assets/logo.png';

const IMG = styled.img`
	max-width: 100%;
	max-height: 40px;
	background-blend-mode: screen;
`;
function Logo() {
	return <IMG src={Img}></IMG>;
}

export default Logo;

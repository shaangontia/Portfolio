import React from 'react';
import styled from 'styled-components';

//------------------
// Container
//------------------

const HeaderContainer = styled.div`
	background-color: #f4eed9;
	min-height: 4rem;
	display: flex;
	@media (max-width: 200px) {
		max-width: 100%;
		font-size: 0.7em;
	}
`;

const H1 = styled.h1`
	color: #41564b;
	@media (max-width: 200px) {
		font-size: 10px;
		color: blue;
	}
`;

export const Header: React.FC = () => (
	<HeaderContainer>This is a Responsive Header</HeaderContainer>
);

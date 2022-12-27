import React from 'react';
import styled from 'styled-components';
import { Link, Router } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from './Logo';
//------------------
// Container
//------------------

const HeaderContainer = styled.div`
	min-height: 4rem;
	position: fixed;
	width: 100%;
	z-index: 10;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const name = `𝓢𝓱𝓪𝓪𝓷`; //TODO: take it out to a const file

export const Header: React.FC = () => (
	<HeaderContainer>
		<Logo />
		<Navbar />
	</HeaderContainer>
);

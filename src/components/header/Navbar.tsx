import React from 'react';
import styled from 'styled-components';

const Menubar = styled.nav`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	@media (max-width: 700px) {
		flex-direction: column;
		align-items: baseline;
		padding: 0;
	}
`;
const NavItem = styled.li`
	font-size: 2rem;
	margin: 0 1.2rem;
	@media (max-width: 700px) {
		margin: 0;
		font-size: 1.5rem;
		padding: 0;
	}
`;

const Anchor = styled.a`
	text-decoration: none;
	transform: scaleX(0);
	transition: transform 250ms ease-in-out;
	&:hover,
	:active {
		border-bottom: 2px solid;
		transform-origin: 0% 50%;
	}
	&:visited {
		color: inherit;
	}
`;

function Navbar() {
	const navItems = ['Home', 'About', 'Posts', 'Contact'];
	return (
		<Menubar>
			<NavList>
				{navItems.map((item) => (
					<NavItem>
						<Anchor href="">{item}</Anchor>
					</NavItem>
				))}
			</NavList>
		</Menubar>
	);
}

export default Navbar;

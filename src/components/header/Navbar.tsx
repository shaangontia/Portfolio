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
	margin: 0;
`;
const NavItem = styled.li`
	margin: 0 1.2rem;
	border-bottom: 1px solid;
`;

const Anchor = styled.a`
	text-decoration: none;
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

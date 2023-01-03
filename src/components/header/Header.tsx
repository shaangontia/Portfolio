import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Logo from './Logo'
import './Header.css'
import { useScrollTop } from './Hooks'

const HeaderContainer = styled.div<any>`
    min-height: 4rem;
    position: fixed;
    width: 100%;
    z-index: 10;
    left: 0;
    top: 0;
    transition: padding 0.3s;
    display: flex;
    border-bottom: ${(props) =>
        props.scrollTop > 0 ? '0.1px solid #454854' : ''};
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    padding: ${(props) => (props.scrollTop > 0 ? '8px 0' : '24px 0')};
    margin-bottom: 40px;
`

export const Header: React.FC = () => {
    const scrollPosition = useScrollTop()
    return (
        <HeaderContainer scrollTop={scrollPosition}>
            <Logo />
            <Navbar />
        </HeaderContainer>
    )
}

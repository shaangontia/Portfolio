import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, Router } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from './Logo'
interface ScrollProps {
    scrollTop: number
}

function useScrollTop() {
    const [scrollTop, setScrollTop] = useState(0)
    const onScroll = (event: any) => setScrollTop(event.target.scrollTop)
    return [scrollTop, { onScroll }]
}
const HeaderContainer = styled.div<any>`
    min-height: 4rem;
    position: fixed;
    width: 100%;
    z-index: 10;
    display: flex;
    border-bottom: ${(props) => (props.scrollTop > 0 ? '0.5px solid' : '')};
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Header: React.FC = () => (
    <HeaderContainer {...useScrollTop}>
        <Logo />
        <Navbar />
    </HeaderContainer>
)

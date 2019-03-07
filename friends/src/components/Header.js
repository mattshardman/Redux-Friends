import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    position: absolute;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color: #000;
`;

function Header() {
    return (
        <HeaderContainer>
            <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
                <i className="material-icons">home</i>
            </Link>
            <Link to="/add" style={{ textDecoration: 'none', color: '#000' }}>
                <i className="material-icons">add</i>
            </Link>
        </HeaderContainer>
    );
}

export default Header;
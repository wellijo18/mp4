"use client";

import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    padding: 0;
    flex-direction: row;
`;

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex: 1;
    color: black;
    background-color: #ffcb05;
    margin: 0;
    padding: 0;
    flex-direction: row;
`;

const StyledLi = styled.li`
    flex: 0;
    margin-right: 0.5rem;

    &:last-child {
        margin-right: 0;
    }
`;

const StyledLink = styled(Link)`
    display: block;
    color: #2a75bb;
    text-decoration: none;
    text-align: center;
    padding: 1.3rem 0.8rem;
    font-size: 1.3rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0d47a1;
        color: #ffcb05;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink href="/">Home</StyledLink></StyledLi>
                <StyledLi><StyledLink href="/about">About</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    display: flex;
    padding: 0;

    @media (min-width: 750px) {
        display: flex;
        width: 30%;
        flex-direction: column;
    }

    @media (max-width: 750px) {
        display: flex;
        width: 100%;
        flex-direction: row;
    }
`;

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex: 1;
    color: black;
    background-color: #1a237e;
    margin: 0;
    padding: 0;

    @media (min-width: 750px) {
        flex-direction: column;
    }

    @media (max-width: 750px) {
        flex-direction: row;
    }
`;

const StyledLi = styled.li`
    border-bottom: 1px solid #1a237e;
    flex: 0;
`;

const StyledLink = styled(Link)`
    display: block;
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 1.3rem; 
    font-size: 1.3rem; 
    transition: background-color 0.3s;

    &:hover {
        background-color: #0d47a1;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/education">Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/employment">Employment</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/contact">Contact</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/projects">Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/activities">Activities</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}

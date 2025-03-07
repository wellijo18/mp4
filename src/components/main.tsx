import styled from "styled-components";

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    padding: calc(1rem + 1vw);
    background-color: rgb(104, 183, 207);
    margin: 0 auto;

    @media (min-width: 750px) {
        width: 70%;
        flex-direction: column;
    }

    @media (max-width: 750px) {
        width: 100%;
        flex-direction: row;
    }
`;

export default function Main({ children }: { children: React.ReactNode }) {
    return <StyledMain>{children}</StyledMain>;
}

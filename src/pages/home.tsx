import Footer from "../components/footer.tsx"
import Main from "../components/main.tsx"
import Nav from "../components/nav.tsx"
import styled from "styled-components";
import welli from "../assets/welli.png";

const StyledDiv = styled.div`
    display: flex;

    @media (min-width: 750px) {
        flex-direction: row;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const PageTitle = styled.h2`
  text-align: center;
`;

export default function Home() {
    return (
        <>
            <StyledDiv>
                <Nav/>
                <Main>
                    <div>
                        <PageTitle style={{color:"#1a237e"}}>Home</PageTitle>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
                            <img src={welli} alt="Photo of author Wellington Oliveira" style={{ width: "15%", maxWidth: "250px", height: "auto", borderRadius: "10px" }} />
                            <p style={{ textAlign: "center", width: "40vw", color: "black"}}>
                                Hello! My name is Wellington Oliveira. I am currently a senior at Boston University majoring in computer science. I currently work part-time at Apple retail but am looking for a developer role.
                                I love everything and anything to do with technology and hope to create my own products! I love gaming, going to the gym, outdoors, and collecting Pokémon cards.
                                I am hoping to improve my skills more and more every day! When I'm not in school, you'll find me cliff jumping into water at the quarry. I jump off of the same one that Adam Sandler and them jumped off in the movie Grown Ups 2. (about 40 feet)
                            </p>
                        </div>
                        <p style={{ textAlign: "center", marginTop: "2rem", color: "black"}}>
                            Welcome to my website! I hope you find it easy to navigate and that everything works great!
                            Feel free to contact me or let me know if you see anything that needs improvement.
                            Feel free to take a look at my employment history and my schooling!
                        </p>
                    </div>
                </Main>
            </StyledDiv>
            <Footer/>
        </>
    );
}

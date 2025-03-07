import Header from "../components/header.tsx"
import Footer from "../components/footer.tsx"
import Main from "../components/main.tsx"
import Nav from "../components/nav.tsx"
import styled from "styled-components";
import Calculator from "../components/calculator.tsx";

const ContentWrapper = styled.div`
    display: flex;

    @media (min-width: 750px) {
        flex-direction: row;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export default function Projects(){
    return (
        <>
            <ContentWrapper>
                <Nav/>
                <Main>
                    <div style={{marginBottom: "2rem", fontFamily: "'Roboto', sans-serif", lineHeight: "1.6", padding: "calc(1rem + 1vw)"}}>
                        <h2 className="page-title" style={{textAlign: "center", marginBottom: "20px", color: "#0d47a1"}}>Projects</h2>

                        <div className="projects-con" style={{paddingLeft: "15px", marginBottom: "20px"}}>
                            <div className="projects-content" style={{borderLeft: "4px solid #0d47a1", paddingLeft: "15px", marginBottom: "20px", paddingTop: "10px", paddingBottom: "10px", color: "black"}}>
                                <h3 style={{ color: "#0d47a1" }}>League of Legends Discord Bot</h3>
                                <ul style={{ listStyle: "disc", marginLeft: "12px"}}>
                                    <li>Used DiscordAPI to retrieve data such as requests, commands, messages, and usernames.</li>
                                    <li>Created a method that would use RiotAPI to receive player and in-game character data to recommend users with personalized rune page selections.</li>
                                    <li>Allows users easier access to player information, both enhancing gameplay experience and improving in-game performance.</li>
                                </ul>
                            </div>
                            <div className="projects-content" style={{borderLeft: "4px solid #0d47a1", paddingLeft: "15px", marginBottom: "20px", paddingTop: "10px", paddingBottom: "10px", color: "black"}}>
                                <h3 style={{ color: "#0d47a1" }}>Grumble</h3>
                                <ul style={{ listStyle: "disc", marginLeft: "12px"}}>
                                    <li>Collaborated with a team to create a unique restaurant matchmaking web app using Python, MongoDB, and API utilization.</li>
                                    <li>Implemented features such as OAuth-based secure logins, radius filtering, personalized restaurant lists, and a comprehensive infographic-style for restaurant details (reviews, pictures, distance).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Calculator/>
                </Main>
            </ContentWrapper>
            <Footer/>
        </>
    );
}

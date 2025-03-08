import Footer from "../components/footer.tsx"
import Main from "../components/main.tsx"
import Nav from "../components/nav.tsx"
import styled from "styled-components";
import jspic from "../assets/js.png"
import cpic from "../assets/c.png"
import csspic from "../assets/css.jpg"
import htmlpic from "../assets/html.png"
import javapic from "../assets/java.png"
import pythonpic from "../assets/python.jpg"


const StyledDiv = styled.div`
    display: flex;

    @media (min-width: 750px) {
        flex-direction: row;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const Logos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`;

const StyledImg = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin: 20px;
`;

export default function Education(){
    return (
        <>
            <StyledDiv>
                <Nav/>
                <Main>
                    <div style={{marginBottom: "2rem", fontFamily: "'Roboto', sans-serif", lineHeight: "1.6", padding: "calc(1rem + 1vw)"}}>
                        <h2 className="page-title" style={{textAlign: "center", marginBottom: "20px", color: "#0d47a1"}}>Education</h2>

                        <div className="education-con" style={{paddingLeft: "15px", marginBottom: "20px"}}>
                            <div className="education-content" style={{borderLeft: "4px solid #0d47a1", paddingLeft: "15px", marginBottom: "20px", paddingTop: "10px", paddingBottom: "10px", color: "black"}}>
                                <h3 style={{ color: "#0d47a1" }}>Boston University | September 2020 - Present</h3>
                                <ul style={{ listStyle: "disc", marginLeft: "12px"}}>
                                    <li>Bachelor of Science in Computer Science</li>
                                    <li>Minor in Portuguese and Brazilian Global Studies</li>
                                    <li>Dean's List Honors: Spring 2021, Fall 2021</li>
                                </ul>
                            </div>
                        </div>

                        <h2 style={{textAlign: "center", marginBottom: "20px", marginTop: "30px", color: "#0d47a1"}}>Languages</h2>

                        <div className="languages-con" style={{paddingLeft: "15px", marginBottom: "20px"}}>
                            <div className="languages-content" style={{paddingLeft: "15px", marginBottom: "20px", paddingTop: "10px", paddingBottom: "10px", color: "black"}}>
                                <Logos>
                                    <StyledImg src={pythonpic} alt="python logo" />
                                    <StyledImg src={javapic} alt="java logo" />
                                    <StyledImg src={cpic} alt="c logo" />
                                    <StyledImg src={htmlpic} alt="html logo" />
                                    <StyledImg src={csspic} alt="css logo" />
                                    <StyledImg src={jspic} alt="javascript logo" />
                                </Logos>
                            </div>
                        </div>
                    </div>
                </Main>
            </StyledDiv>
            <Footer/>
        </>
    );
}
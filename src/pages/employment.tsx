import Footer from "../components/footer.tsx"
import Main from "../components/main.tsx"
import Nav from "../components/nav.tsx"
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;

    @media (min-width: 750px) {
        flex-direction: row;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const EmploymentSection = styled.div`
    .employment-content {
        border-left: 4px solid rgb(31, 167, 216);
        padding-left: 15px;
        margin-bottom: 20px;
    }

    .employment-content ul {
        list-style: disc;
        padding-left: 18px;
    }

    .location-date {
        font-style: italic;
        margin-bottom: 10px;
    }

    .page-title {
        margin-bottom: 20px;
        color: #1a237e; 
    }

    .employment-content h3 {
        color: #1a237e;
    }
`;

export default function Employment(){
    return (
        <>
            <StyledDiv>
                <Nav/>
                <Main>
                    <EmploymentSection>
                        <h2 className="page-title">Employment</h2>

                        <div className="employment-con">
                            <div className="employment-content">
                                <h3>Apple – Specialist</h3>
                                <p className="location-date">Boston, MA | December 2022 – Present</p>
                                <ul>
                                    <li>Provide individualized technical support and client-facing services, maintain latest product knowledge, and utilize bilingual communications in Portuguese to deliver client solutions.</li>
                                    <li>Foster an inclusive environment, assisting customers with sales by curating tailored recommendations while maintaining performance in a fast-paced environment.</li>
                                </ul>
                            </div>
                            <div className="employment-content">
                                <h3>B & L Tile – Communications</h3>
                                <p className="location-date">Boston, MA | January 2017 – Present</p>
                                <ul>
                                    <li>Utilize multiple languages with exceptional verbal and written communication skills to facilitate effective conversations with potential and current clients.</li>
                                    <li>Write and create comprehensive proposals and contracts for construction projects with accuracy and clarity, adhering to legal and industry standards.</li>
                                </ul>
                            </div>
                            <div className="employment-content">
                                <h3>Life Church – Assistant</h3>
                                <p className="location-date">Medford, MA | September 2017 – August 2021</p>
                                <ul>
                                    <li>Provided comprehensive administrative support, assisting with scheduling, coordinating meetings and events, managing correspondence, and maintaining organized files and records.</li>
                                    <li>Coordinated and supervised teams, delegated tasks for well-executed projects and events, and provided guidance and a collaborative environment for overall success.</li>
                                </ul>
                            </div>
                            <div className="employment-content">
                                <h3>Best Buy – Sales Associate</h3>
                                <p className="location-date">Everett, MA | November 2018 – June 2021</p>
                                <ul>
                                    <li>Increased sales through use of ample computer knowledge, recommending and selling products based on customer's past purchases, preferences, and future needs.</li>
                                    <li>Trained new sales associates in selling techniques, product knowledge, customer service, and company procedures.</li>
                                </ul>
                            </div>
                        </div>
                    </EmploymentSection>
                </Main>
            </StyledDiv>
            <Footer/>
        </>
    );
}

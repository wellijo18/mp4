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

const ContactSection = styled.div`
    #contactp {
        margin-bottom: 20px;
    }

    #reachout {
        text-align: center;
    }

    #lim {
        text-align: center;
        margin-top: 50px;
    }

    button {
        padding: 8px 16px;
        background-color: #1a237e;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input, textarea {
        width: 100%;
        padding: 8px;
        margin-top: 4px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: white;
        color: black;
        font-size: 16px;
    }

    input:focus, textarea:focus {
        outline: 2px solid rgb(31, 167, 216);
        box-shadow: 0 0 3px rgba(31, 167, 216, 0.3);
    }
`;

export default function Contact(){
    const clearForm = () => {
        document.getElementById("contactForm").reset();
    };

    return (
        <>
            <StyledDiv>
                <Nav/>
                <Main>
                    <ContactSection>
                        <h2 className="page-title" style={{color: "#1a237e"}}>Contact</h2>
                        <p id="contactp">If you have any questions or opportunities, feel free to reach out to me using the contact details below!</p>
                        <p><b>Address:</b> 18 Jonathan Lane, Malden, MA 02148</p>
                        <p><b>Email:</b> <a href="mailto:wellijo@bu.edu">wellijo@bu.edu</a></p>
                        <p><b>Phone:</b> <a href="tel:3392247790">339-224-7790</a></p>
                        <div id="reachout">
                            <h2 style={{color: "#1a237e"}}>Reach Out</h2>
                            <form id="contactForm">
                                <label htmlFor="fullname">Full Name:</label><br/>
                                <input type="text" id="fullname" name="fullname"/><br/><br/>
                                <label htmlFor="message">Message:</label><br/>
                                <textarea id="message" name="message" rows={4} cols={50}></textarea><br/><br/>
                                <button type="button" onClick={clearForm}>Submit</button>
                            </form>
                        </div>
                        <div>
                            <p id="lim">
                                Feel free to contact me on LinkedIn as well! Thank you for your visit!
                            </p>
                        </div>
                    </ContactSection>
                </Main>
            </StyledDiv>
            <Footer/>
        </>
    );
}
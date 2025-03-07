import Header from "../components/header.tsx"
import Footer from "../components/footer.tsx"
import Main from "../components/main.tsx"
import Nav from "../components/nav.tsx"
import styled from "styled-components";
import pokevid from "../assets/pokemon.mp4"
import instavid from "../assets/insta.mp4"

const ContentWrapper = styled.div`
    display: flex;

    @media (min-width: 750px) {
        flex-direction: row;
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

const ActivitiesContainer = styled.div`
  .hobbies-title {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .activities-content {
    border-left: 4px solid black;
    padding-left: 15px; 
    margin-bottom: 20px;
  }
  
  #vid {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
    padding: 1rem;
  }
  
  video {
    width: calc(16vw - 20px);
    max-width: 800px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 750px) {
    #vid {
      flex-direction: column;
      gap: 20px;
    }
    
    video {
      width: 90%;
    }
  }
`;

export default function Activities(){
    return (
        <>
            <ContentWrapper>
                <Nav/>
                <Main>
                    <ActivitiesContainer>
                        <h2 className="page-title">Activities</h2>

                        <div className="activities-con">
                            <div className="activities-content">
                                <h3>Activation Church – Volunteer</h3>
                                <p className="location-date">January 2019 – Present</p>
                            </div>
                            <div className="activities-content">
                                <h3>BU Gaming – Member</h3>
                                <p className="location-date">September 2020 – Present</p>
                            </div>
                            <div className="activities-content">
                                <h3>BU Brazilian Association – Member</h3>
                                <p className="location-date">September 2021 – Present</p>
                            </div>
                        </div>
                        <h2 className="hobbies-title">Hobbies</h2>
                        <div id="vid">
                            <video controls>
                                <source src={instavid} type="video/mp4" />
                            </video>
                            <video controls>
                                <source src={pokevid} type="video/mp4" />
                            </video>
                        </div>
                    </ActivitiesContainer>
                </Main>
            </ContentWrapper>
            <Footer/>
        </>
    );
}
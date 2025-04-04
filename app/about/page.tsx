"use client";
import Image from "next/image";
import Header from "../../src/components/header";
import Nav from "../../src/components/nav";
import pokeball from "../assets/pokeball.png";

export default function About() {
    return (
        <>
            <div>
                <Header>
                    <Nav />
                </Header>
            </div>
            <div style={{ backgroundColor: "#6f98d1", padding: "2rem", minHeight: "100vh" }}>
                <h1 style={{textAlign: "center", fontSize: "2rem", color: "#FFCB05FF"}}>Welcome To My Pokémon Card App!</h1>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem"}}>
                    <Image src={pokeball} alt="Pokéball picture" width={200} />
                    <p style={{width: "30%", marginLeft: "2rem"}}>
                        Welcome Trainer! If you love all things Pokémon like me, especially collecting cards, you're going to love the ability to find
                        every card that has been made for the specific pokemon you search. Make sure when you input their name that it is spelled correctly.
                        To see my favorite pokemon click on Home and search for Exploud, Garchomp, and Reshiram!
                    </p>
                </div>
            </div>
        </>
    );
}

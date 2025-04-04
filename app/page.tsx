"use client";

import { useState } from "react";
import Header from "../src/components/header";
import Nav from "../src/components/nav";

interface Card {
    id: string;
    name: string;
    images: {
        small: string;
    };
}

export default function PokemonCardSearch() {
    const [query, setQuery] = useState("");
    const [cards, setCards] = useState<Card[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchCards = async () => {
        if (!query.trim()) return;

        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                `https://api.pokemontcg.io/v2/cards?q=name:${query}`,
                {
                    headers: {
                        "X-Api-Key": process.env.POKEMON_API_KEY || "",
                    },
                }
            );
            if (!response.ok) {
                switch (response.status) {
                    case 400:
                        throw new Error("Bad request");
                    case 402:
                        throw new Error("Request failed");
                    case 403:
                        throw new Error("Access not allowed");
                    case 404:
                        throw new Error("No cards found for this search");
                    case 429:
                        throw new Error("Rate limit exceeded");
                    case 500:
                    case 502:
                    case 503:
                    case 504:
                        throw new Error("Server error. The API is currently having issues");
                    default:
                        throw new Error(`Unexpected error: ${response.statusText}`);
                }
            }

            const data = await response.json();

            if (data.data && data.data.length > 0) {
                setCards(data.data);
            } else {
                setError("No Pokémon cards found.");
                setCards([]);
            }
        } catch (err) {
            setError(err.message || "An unknown error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div>
                <Header>
                    <Nav />
                </Header>
            </div>
            <div
                style={{padding: "2rem", backgroundColor: "#6f98d1", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center",}}>
                <h1 style={{fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#ffcb05",}}>
                    Type the Pokémon's Name Here:
                </h1>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a Pokémon"
                        style={{border: "1px solid #ffcb05", padding: "0.5rem", borderRadius: "0.5rem", width: "250px",}}/>
                    <button onClick={fetchCards} style={{backgroundColor: "#007bff", padding: "0.5rem 1rem", border: "none", borderRadius: "0.5rem", cursor: "pointer",}}>
                        Search
                    </button>
                </div>

                {loading && <p style={{ color: "#ffcb05" }}>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}

                <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "1rem", width: "100%",}}>
                    {cards.map((card) => (
                        <div key={card.id} style={{border: "1px solid #FFCC00", padding: "0.5rem", borderRadius: "0.5rem", textAlign: "center",}}>
                            <img src={card.images.small} alt={card.name} style={{ width: "100%" }} />
                            <p style={{ marginTop: "0.5rem", color: "#ffcb05" }}>{card.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

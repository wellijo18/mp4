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
              "X-Api-Key": process.env.NEXT_PUBLIC_POKEMON_API_KEY || "",
            },
          }
      );
      const data = await response.json();

      if (data.data) {
        setCards(data.data);
      } else {
        setError("No cards found.");
      }
    } catch (err) {
      setError("Failed to fetch data.");
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
            style={{
              padding: "2rem",
              backgroundColor: "#6f98d1",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
        >
          <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#fff",
              }}
          >
            Type the Pokémon's Name Here:
          </h1>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a Pokémon"
                style={{
                  border: "1px solid #ccc",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                  width: "250px",
                }}
            />
            <button
                onClick={fetchCards}
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
            >
              Search
            </button>
          </div>

          {loading && <p style={{ color: "#fff" }}>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                marginTop: "1rem",
                width: "100%",
                maxWidth: "1200px",
              }}
          >
            {cards.map((card) => (
                <div
                    key={card.id}
                    style={{
                      border: "1px solid #FFCC00",
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                      textAlign: "center",
                    }}
                >
                  <img src={card.images.small} alt={card.name} style={{ width: "100%" }} />
                  <p style={{ marginTop: "0.5rem" }}>{card.name}</p>
                </div>
            ))}
          </div>
        </div>
      </>
  );
}

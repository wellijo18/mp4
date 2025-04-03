"use client";

export default function Header({ children }) {
    return (
        <header style={{backgroundColor: "#ffcb05", color: "#2a75bb", padding: "1rem", fontSize: "2rem", fontWeight: "bold", borderBottom: "4px solid #2a75bb", display: "flex", justifyContent: "space-between", alignItems: "center",}}>
            <div>PokeSearch</div>
            {children}
        </header>
    );
}
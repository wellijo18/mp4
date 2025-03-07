import { useState } from "react";
import brazil from "../assets/brazil.jpg";
import styled from "styled-components";

const CalculatorContainer = styled.div`
    background-image: url(${brazil});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    @media (min-width: 750px) {
        height: 50vh;
    }

    @media (max-width: 750px) {
        height: 70vw;
    }
`;

const Title = styled.h2`
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(1, 33, 105);
    font-family: "Pacifico", cursive;
    font-size: calc(1.5rem + 1vw);
    text-align: center;
    width: 100%;
    margin: 0 0 10px 0;
`;

const Input = styled.input`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    font-size: 1rem;
    background-color: #fffacd;
    border: 2px solid #ccc;
    border-radius: 5px;
    text-align: center;
    color: black;
    margin: 5px;
    box-sizing: border-box;
`;

const OutputBox = styled.div`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    font-size: 1rem;
    background-color: #fffacd;
    border: 2px solid #ccc;
    border-radius: 5px;
    text-align: center;
    margin: 5px;
    box-sizing: border-box;
    min-height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    margin: 10px 0;
`;

const Button = styled.button`
    margin: 5px;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #009B3A;
    color: white;
    transition: 0.3s;
    flex: 0 0 auto;

    &:hover {
        background-color: #0d47a1;
    }
`;

export default function Calculator() {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [output, setOutput] = useState("");

    const showRes = (res: number | string) => setOutput(res.toString());

    const handleOperation = (operation: string) => {
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);
        if (isNaN(num1) || isNaN(num2)) return showRes("Only numbers");

        switch (operation) {
            case "multiply":
                showRes(num1 * num2);
                break;
            case "divide":
                if (num2 === 0) return showRes("Second value can't be zero");
                showRes(num1 / num2);
                break;
            case "add":
                showRes(num1 + num2);
                break;
            case "subtract":
                showRes(num1 - num2);
                break;
            case "power":
                showRes(Math.pow(num1, num2));
                break;
            default:
                break;
        }
    };

    const reset = () => {
        setN1("");
        setN2("");
        showRes("");
    };

    return (
        <CalculatorContainer>
            <Title>Brazilian Calculator</Title>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "300px" }}>
                <Input
                    type="number"
                    value={n1}
                    onChange={(e) => setN1(e.target.value)}
                    placeholder="Enter 1st Number"
                />
                <Input
                    type="number"
                    value={n2}
                    onChange={(e) => setN2(e.target.value)}
                    placeholder="Enter 2nd Number"
                />
            </div>
            <ButtonContainer>
                <Button onClick={() => handleOperation("multiply")}>×</Button>
                <Button onClick={() => handleOperation("divide")}>÷</Button>
                <Button onClick={() => handleOperation("add")}>+</Button>
                <Button onClick={() => handleOperation("subtract")}>−</Button>
                <Button onClick={() => handleOperation("power")}>^</Button>
                <Button onClick={reset}>Reset</Button>
            </ButtonContainer>
            <OutputBox style={{ color: output.startsWith("-") ? "red" : "black" }}>
                {output}
            </OutputBox>
        </CalculatorContainer>
    );
}
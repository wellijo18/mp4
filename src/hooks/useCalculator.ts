import { useState } from "react";

export function useCalculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [output, setOutput] = useState("");

    const showRes = (res: number | string) => setOutput(res.toString());

    const daOper = (oper: string) => {
        const actualnum = parseFloat(num1);
        const actualnum2 = parseFloat(num2);

        if (isNaN(actualnum)) {
            return showRes("Only numbers");
        }

        if (isNaN(actualnum2)) {
            return showRes("Only numbers");
        }

        switch (oper) {
            case "multiply":
                showRes(actualnum * actualnum2);
                break;
            case "divide":
                if (actualnum2 === 0) {
                    return showRes("Second value can't be zero");
                }
                showRes(actualnum / actualnum2);
                break;
            case "add":
                showRes(actualnum + actualnum2);
                break;
            case "subtract":
                showRes(actualnum - actualnum2);
                break;
            case "power": {
                let result = 1;
                for (let i = 0; i < actualnum2; i++) {
                    result *= actualnum;
                }
                showRes(result);
                break;
            }
            default:
                break;
        }
    };

    const reset = () => {
        setNum1("");
        setNum2("");
        showRes("");
    };

    return { num1, setNum1, num2, setNum2, output, daOper, reset };
}

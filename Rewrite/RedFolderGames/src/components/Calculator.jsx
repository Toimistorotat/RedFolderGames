import { useState } from "react";

function Calculator() {
    const [expression, setExpression] = useState("");
    const [ans, setAns] = useState("");
    const [savedCalcs, setSavedCalcs] = useState([]);

    const append = (value) => {
        setExpression((prev) => prev + value);
    };

    const clear = () => {
        setExpression("");
        setAns("");
    };

    const calculate = () => {
        try {
            //const result = String(eval(expression));
            setAns(result);
        } catch {
            setAns("Error");
        }
    };

    const saveCalculation = (e) => {
        e.preventDefault();

        if (!expression || ans === "" || ans === "Error") return;

        const name = "Calculator"; // or user input later

        addCalculation(e, name, expression);

        const newCalc = {
            id: Date.now(),
            expression,
            result: ans,
        };

        setSavedCalcs((prev) => [newCalc, ...prev]);
    };

    return (
        <div className="text-gold bg-white w-100 rounded-lg p-4">
            <div className="mb-4">
                <p className="text-black font-semibold">Expression</p>
                <input
                    type="text"
                    value={expression}
                    readOnly
                    className="w-full mt-1 border px-2 py-1 text-black rounded"
                />
            </div>

            <div className="mb-4">
                <p className="text-black font-semibold">Solution</p>
                <input
                    type="text"
                    value={ans}
                    readOnly
                    className="w-full mt-1 border px-2 py-1 text-black rounded"
                />
            </div>

            <div className="grid grid-cols-4 gap-2 mb-4">
                <button onClick={() => append("7")}>7</button>
                <button onClick={() => append("8")}>8</button>
                <button onClick={() => append("9")}>9</button>
                <button onClick={() => append("/")}>/</button>

                <button onClick={() => append("4")}>4</button>
                <button onClick={() => append("5")}>5</button>
                <button onClick={() => append("6")}>6</button>
                <button onClick={() => append("*")}>*</button>

                <button onClick={() => append("1")}>1</button>
                <button onClick={() => append("2")}>2</button>
                <button onClick={() => append("3")}>3</button>
                <button onClick={() => append("-")}>-</button>

                <button onClick={clear}>C</button>
                <button onClick={() => append("0")} className="col-start-2">0</button>
                <button onClick={calculate}>=</button>
                <button onClick={() => append("+")}>+</button>
            </div>

            <button
                onClick={(e) => saveCalculation(e)}
                className="w-full bg-black text-white py-2 rounded mb-4"
            >
                Save Calculation
            </button>

            <div>
                <h2 className="text-black font-bold mb-2">Saved Calculations</h2>

                {savedCalcs.length === 0 ? (
                    <p className="text-gray-500">No saved calculations yet.</p>
                ) : (
                    <ul className="space-y-2">
                        {savedCalcs.map((calc) => (
                            <li
                                key={calc.id}
                                className="border rounded p-2 text-black flex justify-between items-center"
                            >
                                <span>
                                    {calc.expression} = {calc.result}
                                </span>

                                <button className="ml-4 text-lg hover:text-blue-500"
                                    type="submit">

                                    ➥
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Calculator;
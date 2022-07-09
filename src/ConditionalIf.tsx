import { useState } from "react";
import Simple from "./Simple";

const ConditionalIf = () => {
    const [selectedRate, setSelectedRate] = useState(1);

    const displayResult = () => {
        if (selectedRate === 1){
            return <span>Number 1 seelcted</span>
        } else if (selectedRate === 2){
            return (
                <>
                    <span>Second choice</span>
                    <input type="text" />
                </>
            );
        } else if (selectedRate === 3){
            return (
                <>
                    <Simple />
                </>
            );
        } else {
            return <span>Thanks!</span>
            
        }
    }

    return (
        <>
            <h1>Conditional If example</h1>

            <div>Rate the website</div>

            <select onChange={(e) => {
                console.log(e.currentTarget.value);
                setSelectedRate(parseInt(e.currentTarget.value, 10))
            }}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            <div>
                {displayResult()}
            </div>
        </>
    )
}

export default ConditionalIf;
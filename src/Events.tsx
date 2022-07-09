import { useState } from "react";

const Events = () => {
    const [canSee, setCanSee] = useState(false);
    const [text, setText] = useState('');

    const handleCheckbox = () => {
        // alert("Value changed");
        setCanSee(!canSee);
    }

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        setText(e.currentTarget.value);
    }

    return (
        <>
            <h1>Events example</h1>
            <div>
                <input type="checkbox" onChange={handleCheckbox} /> 
            </div>
            <div>
                <button onClick={() => {
                    alert('Clicked');
                }}>Click me!</button>
            </div>
            <div>
                <input type="text" onKeyUp={(e) => handleKeyUp(e)} />
            </div>
            {canSee ? <div>You can see that</div> : 
                <div>You are not allowed to see</div>}

            <div>
                {text}
            </div>
        </>
    )
}

export default Events;
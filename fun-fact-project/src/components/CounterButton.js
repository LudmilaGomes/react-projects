import React, { useState } from "react";

function CounterButton()
{
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>first button - increment counter</p>
            <button onClick={ () => setCount(count + 1) }></button>
            <p>second button - reset counter</p>
            <button onClick={ () => setCount(0) }></button>
            <p>third button - decrement counter</p>
            <button onClick={ () => setCount(count - 1) }></button>
            <p>MY COUNTER IS: {count}</p>
        </div>
    );
}

export default CounterButton
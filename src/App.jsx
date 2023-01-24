import React, {useState} from "react";

const App = () => {

    const [count, setCount] = useState(0)

    const counterIncrement = () => {
        setCount(count + 1)
    }

    const counterDecrement = () => {
        setCount(count - 1)
    }

    return (
        <div className="cont">
            <button onClick={counterDecrement}>-</button>
            <h2>Count { count }</h2>
            <button onClick={counterIncrement }>+</button>
        </div>
    );
}

export default App;
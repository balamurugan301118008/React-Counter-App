import React, { useEffect, useState } from 'react'

export default function App() {
    let [count, setCount] = useState(0)
    let style = {
        Active: {
            color: 'green'
        },
        Inactive: {
            color: 'red'
        },
        equal: {
            color: 'yellow'
        }
    }
    return (
        <React.Fragment>
            <h2>You're clicked <span style={count > 0 ? style.Active : count == 0 ? style.equal : style.Inactive}>{count}</span> times</h2>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count = 0)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </React.Fragment >
    )

}

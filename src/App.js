import React from 'react';
import { useState } from 'react';
import './App.css'

export default function App() {
    const initialNum = {
        good: 0, bad: 0
    };
    const [num, setNum] = useState(initialNum);

    return (
        <div className='app'>
            <h1>Are we good?</h1>
            <ul style={{ fontSize: '28px' }}>
                <li key={1}>
                    <button onClick={() => {
                        setNum({
                            ...num,
                            good: num.good + 1
                        })
                    }}>
                        👍{num.good}
                    </button>
                </li>
                <li key={2}>
                    <button onClick={() => {
                        setNum({
                            ...num,
                            bad: num.bad + 1
                        })
                    }}>
                        👎{num.bad}
                    </button>
                </li>
            </ul>
        </div>
    );
}
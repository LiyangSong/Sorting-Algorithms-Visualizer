import { useState } from 'react'

export default function UserInput() {
    return(
        <div className="userInput">
            <InputArea />
            <ButtonArea />
        </div>
    )
}

function InputArea() {
    const [numbers, setNumbers] = useState([
        {id: 1, number: -1},
        {id: 2, number: -1},
        {id: 3, number: -1}
    ]);
    let numbersLength = numbers.length;

    function handleNumberChange(id, number) {
        setNumbers(numbers.map(n => {
            if (n.id === id) {
                return {id: id, number: number};
            } else {
                return n;
            }
        }));
    }

    function handleAddLength() {
        if (numbersLength < 10) {
            setNumbers([
                ...numbers,
                {id: numbersLength + 1, number: -1}
            ])
        }
    }

    function handleReduceLength() {
        if (numbersLength > 2) {
            setNumbers(
                numbers.slice(0, numbersLength - 2)
            )
        }
    }

    return(
        <div className="inputArea">
            {numbers.map(number => (
                <input
                    key={number.id}
                    onChange={e => {
                        handleNumberChange(
                            number.id,
                            e.target.value
                        )
                    }}
                />
            ))}
            <button onClick={handleReduceLength}>－</button>
            <button onClick={handleAddLength}>＋</button>
            <ul>
                {numbers.map(number => (
                    <li key={number.id}>
                        {number.number}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function ButtonArea() {
    return(
        <div className="buttonArea">
            <button>▶/■</button>
            <button>▶▶</button>
            <button>◀◀</button>
        </div>
    )
}